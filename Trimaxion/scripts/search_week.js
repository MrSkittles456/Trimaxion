

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchLastButton').addEventListener('click', performLast7DaySearch);
    document.getElementById('searchTerm').addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && event.shiftKey) { // Check if Shift + Enter is pressed
            performLast7DaySearch();
        }
    });
});


function performLast7DaySearch() {
    let searchTerm = document.getElementById('searchTerm').value.trim();
    if (searchTerm) {
        // Construct the search URLs with advanced search options for the past week
        let bingUrl = 'https://www.bing.com/search?q=' + encodeURIComponent(searchTerm) + '&freshness=week';
        let duckduckgoUrl = 'https://duckduckgo.com/?q=' + encodeURIComponent(searchTerm) + '&df=w&ia=web';
        let googleUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchTerm) + '&tbs=qdr:w';
        let qwantUrl = 'https://www.qwant.com/?q=' + encodeURIComponent(searchTerm) + '&t=web&freshness=week';
        let braveUrl = 'https://search.brave.com/search?q=' + encodeURIComponent(searchTerm) + '&tf=pw';

        // Open tabs with the advanced search URLs
        chrome.tabs.create({ url: bingUrl });
        chrome.tabs.create({ url: duckduckgoUrl });
        chrome.tabs.create({ url: googleUrl });
        chrome.tabs.create({ url: qwantUrl });
        chrome.tabs.create({ url: braveUrl });
    }
}

function closeWindow() {
    window.close(); // Close the pop-up window
}
