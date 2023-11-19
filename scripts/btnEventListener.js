document.getElementById('brightnessUp').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ['scripts/brightnessFunction/increaseBrightness.js']
        });
    });
});


document.getElementById('brightnessDown').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ['scripts/brightnessFunction/decreaseBrightness.js']
        });
    });
});

document.getElementById('contrastUp').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ['scripts/contrastFunction/increaseContrast.js']
        });
    });
});


document.getElementById('contrastDown').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ['scripts/contrastFunction/decreaseContrast.js']
        });
    });
});

document.getElementById('textUp').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            files: ['scripts/textFunction/increaseText.js']
        });
    });
});

document.getElementById('textDown').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            files: ['scripts/textFunction/decreaseText.js']
        });
    });
});

document.getElementById('changeFontArialRadio').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id },
            files: ['scripts/fontStyleFunction/changeFontArial.js']
        });
    });
});

document.getElementById('changeFontVerdanaRadio').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id },
            files: ['scripts/fontStyleFunction/changeFontVerdana.js']
        });
    });
});

document.getElementById('changeFontHelveticaRadio').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id },
            files: ['scripts/fontStyleFunction/changeFontHelvetica.js']

        });
    });
});

document.getElementById('textReset').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            files: ['scripts/textFunction/resetText.js']
        });
    });
});



