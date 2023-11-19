
document.getElementById('brightnessUp').addEventListener('click', () => {
    alert("Brightness up is clicked");
});


document.getElementById('textUp').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            files: ['scripts/textFunction/increaseText.js']
        });
    });
    
});