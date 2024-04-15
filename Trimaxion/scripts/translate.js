document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('translateButton').addEventListener('click', promptRefreshTab);
});


function promptRefreshTab() {
    alert("Please refresh the tab you want to translate, and then click OK.");
    
    
    chrome.tabs.onUpdated.addListener(handleTabUpdate);
}

// Function to handle tab update
function handleTabUpdate(tabId, changeInfo, tab) {
    
    if (changeInfo.status === 'complete') {
        chrome.tabs.onUpdated.removeListener(handleTabUpdate);
        
        // Translate the refreshed tab
        translateTabToEnglish(tabId);
    }
}

// Function to translate the tab to English
function translateTabToEnglish(tabId) {
    // Get the URL of the tab
    chrome.tabs.get(tabId, function(tab) {
        var translateUrl = 'https://translate.google.com/translate?u=' + encodeURIComponent(tab.url);
        // Update the tab to the translated page
        chrome.tabs.update(tabId, { url: translateUrl });
    });
}
