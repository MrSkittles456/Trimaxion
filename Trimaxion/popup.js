document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchButton').addEventListener('click', openSearchBox);
});

function openSearchBox() {
    chrome.windows.create({
        url: chrome.runtime.getURL('search.html'),
        type: 'popup',
        width: 500, 
        height: 200,
        focused: true
    });
}

