function openFavoritesTab() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.update(tabs[0].id, { url: "edge://favorites" }, () => {
          if (chrome.runtime.lastError) {
            console.error("Redirect failed:", chrome.runtime.lastError.message);
          }
        });
      }
    });
  }
  
  openFavoritesTab();
  
  chrome.action.onClicked.addListener(() => {
    chrome.tabs.create({ url: "edge://favorites" });
  });