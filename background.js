chrome.runtime.onInstalled.addListener(() => {
  fetch('https://eneskeremaydin.com.tr/ekasdomains')
  .then(response => response.text())
  .then(data => {
    const urls = data.split('<br>').map(url => url.trim()).filter(url => url);
    chrome.storage.local.set({ allowedDomains: urls });
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
if (changeInfo.status === 'complete') {
  chrome.storage.local.get('allowedDomains', (data) => {
    const allowedDomains = data.allowedDomains || [];
    const currentDomain = new URL(tab.url).hostname;
    if (allowedDomains.includes(currentDomain)) {
        chrome.action.setIcon({ path: "./data/media/yes-16x16.png", tabId: tabId });
      } else {
        chrome.action.setIcon({ path: "./data/media/EKA-16x16.jpg", tabId: tabId });
      }
    });
  }
});