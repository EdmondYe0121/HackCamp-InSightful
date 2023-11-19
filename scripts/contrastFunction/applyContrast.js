function applyContrast() {
    chrome.storage.sync.get('contrast', function(data) {
        if (data.contrast) {
            let contrastValue = data.contrast;

            document.querySelectorAll('*').forEach(function(element) {
                element.style.filter = `contrast(${contrastValue}%)`;
            });

            console.log('Applied contrast:', contrastValue);
        }
    });
}

applyContrast();