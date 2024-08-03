document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.local.get('allowedDomains', (data) => {
      const domainList = document.getElementById('domainList');
      const allowedDomains = data.allowedDomains || [];
      allowedDomains.forEach(domain => {
        const li = document.createElement('li');
        li.textContent = domain;
        domainList.appendChild(li);
      });
    });
  });
  