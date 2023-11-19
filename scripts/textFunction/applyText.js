function applyFontSize() {
    chrome.storage.sync.get('fontSize', function(data) {
        if (data.fontSize) {
            document.querySelectorAll('*').forEach(function(element) {
                var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
                var currentSize = parseFloat(style);
                element.style.fontSize = currentSize;
            });
            console.log('Applied font size:', data.fontSize);
        }
    });
}

applyFontSize();