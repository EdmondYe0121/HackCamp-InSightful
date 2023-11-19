function applyFontSize() {
    chrome.storage.sync.get('fontSize', function(data) {
        console.log('Applying font size:', data);
        if (data.fontSize) {
            console.log('Applying font size:', data.fontSize);
            document.querySelectorAll('*').forEach(function(element) {
                element.style.fontSize = data.fontSize + 'px';
            });
            console.log('Applied font size:', data.fontSize);
        }
    });
}

applyFontSize();