// background.js

// Function to send a message to the content script in the specified tab
function applyFontSizeToTab(tabId) {
    // apply a function to the content script
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['scripts/textFunction/applyText.js']
    });
}

function applyDarkModeToTab(tabId) {
    // apply a function to the content script
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['scripts/darkFunction/applyDark.js']
    })
}

function applyBrightnessToTab(tabId) {
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['scripts/brightnessFunction/applyBrightness.js']
    });
}

function applyContrastToTab(tabId) {
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['scripts/contrastFunction/applyContrast.js']

    });
}

// Listener for when a tab is updated
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    // if (changeInfo.status === 'complete') {
    //     console.log('Tab updated:', tabId);
    //     applyFontSizeToTab(tabId);
    // }
    applyFontSizeToTab(tab.id);
    applyDarkModeToTab(tab.id);
    

    if (changeInfo.status === 'complete') {
        console.log('Tab updated:', tabId);
        applyFontSizeToTab(tabId);
        applyBrightnessToTab(tabId);
        applyContrastToTab(tabId);
    }

});

// Listener for when a new tab is created
chrome.tabs.onCreated.addListener(function(tab) {
    console.log('New tab opened:', tab.id);
    applyFontSizeToTab(tab.id);
    applyBrightnessToTab(tab.id);
    applyContrastToTab(tab.id);
});
