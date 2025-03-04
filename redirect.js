chrome.tabs.update({ url: "edge://favorites" });

chrome.action.onClicked.addListener(() => {
    chrome.tabs.create({ url: "edge://favorites" });
});