function applyFontSize(newFontSize) {
    chrome.storage.sync.get('fontSize', function(data) {
        // if (data.fontSize) {
        //     document.querySelectorAll('*').forEach(function(element) {
        //         var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
        //         var currentSize = parseFloat(style);
        //         element.style.fontSize = (currentSize - data.fontSize) + 'px';
        //     });
        // }
            document.querySelectorAll('*').forEach(function(element) {
                var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
                var currentSize = parseFloat(style);
                element.style.fontSize = newFontSize + 'px';
            })
            console.log('Applied decreased font size:', newFontSize);
        
    });
}
function increaseFontSize() {
    chrome.storage.sync.get('fontSize', function(data) {
        console.log(" decreasing testing", data);
        let newFontSize = data.fontSize? data.fontSize + 1 : 1;
        applyFontSize(newFontSize)
        chrome.storage.sync.set({ 'fontSize': newFontSize }, function() {
            console.log('Decreased font size saved:', newFontSize);
            // applyFontSize();
        });
    });
}

increaseFontSize();