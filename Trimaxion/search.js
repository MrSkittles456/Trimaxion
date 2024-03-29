// Add a context menu item to send selected text to the extension search box
chrome.contextMenus.create({
    title: "Search '%s' with MySearchExtension",
    contexts:["selection"],
    onclick: function(info, tab) {
        document.getElementById('searchTerm').value = info.selectionText;
        performSearch();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchGoButton').addEventListener('click', performSearch);
    document.getElementById('searchTerm').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
    document.getElementById('cancelButton').addEventListener('click', closeWindow);
});

// Function to perform the search on Bing, DuckDuckGo, Google, and searx
function performSearch() {
    let searchTerm = document.getElementById('searchTerm').value.trim();
    if (searchTerm) {
        chrome.tabs.create({ url: 'https://www.bing.com/search?q=' + encodeURIComponent(searchTerm) });
        chrome.tabs.create({ url: 'https://duckduckgo.com/?q=' + encodeURIComponent(searchTerm) });
        chrome.tabs.create({ url: 'https://www.google.com/search?q=' + encodeURIComponent(searchTerm) });
        chrome.tabs.create({ url: 'https://www.qwant.com/?q=' + encodeURIComponent(searchTerm) });
        chrome.tabs.create({ url: 'https://search.brave.com/search?q=' + encodeURIComponent(searchTerm) });
        
    }
}

function closeWindow() {
    window.close(); // Close the pop-up window
}
