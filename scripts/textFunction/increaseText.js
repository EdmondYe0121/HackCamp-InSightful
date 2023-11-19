// Increase font size
function applyFontSize() {
    chrome.storage.sync.get('fontSize', function(data) {
        if (data.fontSize) {
            document.querySelectorAll('*').forEach(function(element) {
                var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
                var currentSize = parseFloat(style);
                element.style.fontSize = (currentSize + data.fontSize) + 'px';
            });
            console.log('Applied font size:', data.fontSize);
        }
    });
}
function increaseFontSize() {
    chrome.storage.sync.get('fontSize', function(data) {
        let newFontSize = data.fontSize ? data.fontSize + 1 : 1;
        chrome.storage.sync.set({ 'fontSize': newFontSize }, function() {
            console.log('Increased font size saved:', newFontSize);
            applyFontSize();
        });
    });
}

increaseFontSize();