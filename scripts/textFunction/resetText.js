function applyFontSize() {
    chrome.storage.sync.get('fontSize', function(data) {
        if (data.fontSize) {
            document.querySelectorAll('*').forEach(function(element) {
                var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
                var currentSize = parseFloat(style);
                element.style.fontSize = (currentSize - data.fontSize) + 'px';
            });
            console.log('Applied font size:', data.fontSize);
        }
    });

    chrome.storage.sync.set('fontSize', 0, function() {
        console.log('Reset font size saved:', 0);
    });
}

applyFontSize();