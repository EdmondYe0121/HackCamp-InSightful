// content.js

function increaseFontSize() {
    var allElements = document.querySelectorAll('*');
    var maxFontSize = 0;

    allElements.forEach(function(element) {
        var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
        var currentSize = parseFloat(style);
        element.style.fontSize = (currentSize + 1) + 'px'; // Increase by 1px

        if (currentSize > maxFontSize) {
            maxFontSize = currentSize;
        }
    });

    console.log('Max font size:', maxFontSize + 1);

    // Save the maximum font size to Chrome storage
    chrome.storage.sync.set({ 'fontSize': maxFontSize + 1 }, function() {
        console.log('Max font size saved:', maxFontSize + 1);
    });
}
increaseFontSize();