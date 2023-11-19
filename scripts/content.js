// content.js

function applyFontSize() {
    chrome.storage.sync.get('fontSize', function(data) {
        if (data.fontSize) {
            document.querySelectorAll('*').forEach(function(element) {
                element.style.fontSize = data.fontSize + 'px';
            });
            console.log('Applied font size:', data.fontSize);
        }
    });
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "applyFontSize") {
        applyFontSize();
    }
});
