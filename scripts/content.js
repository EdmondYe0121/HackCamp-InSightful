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

function applyBrightness() {
    chrome.storage.sync.get('brightness', function(data) {
        if (data.brightness) {
            document.querySelectorAll('*').forEach(function(element) {
                element.style.filter = `brightness(${data.brightness}%)`;
            });
            console.log('Applied brightness:', data.brightness);
        }
    });
}

function applyContrast() {
    chrome.storage.sync.get('contrast', function(data) {
        if (data.contrast) {
            document.querySelectorAll('*').forEach(function(element) {
                element.style.filter += ` contrast(${data.contrast}%)`;
            });
            console.log('Applied contrast:', data.contrast);
        }
    });
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "applyFontSize") {
        applyFontSize();
    }

    if (request.action === "applyBrightness") {
        applyBrightness();
    }

    if (request.action === "applyContrast") {
        applyContrast();
    }
});