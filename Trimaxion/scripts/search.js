
chrome.contextMenus.create({
    title: "Search '%s' with Trimaxion",
    contexts:["selection"],
    onclick: function(info, tab) {
        document.getElementById('searchTerm').value = info.selectionText;
        performSearch();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchGoButton').addEventListener('click', performGeneralSearch);
    document.getElementById('searchTerm').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            performGeneralSearch();
        }
    });
});



function performGeneralSearch() {
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
    window.close(); 
}


