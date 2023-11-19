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
}
function decreaseFontSize() {
    chrome.storage.sync.get('fontSize', function(data) {
        // let newFontSize = data.fontSize && data.fontSize > 1 ? data.fontSize - 1 : 0;
        chrome.storage.sync.set({ 'fontSize': data.fontSize -1 }, function() {
            console.log('Decreased font size saved:', data.fontSize -1);
            applyFontSize();
        });
    });
}

decreaseFontSize();

// state
// increase
// 
// current + state
// decrease
// current - state