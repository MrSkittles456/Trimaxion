document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchButton').addEventListener('click', openSearchBox);
});

function openSearchBox() {
    chrome.windows.create({
        url: chrome.runtime.getURL('search.html'),
        type: 'popup',
        width: 400, // Adjust width as needed
        height: 200, // Adjust height as needed
        focused: true
    });
}

