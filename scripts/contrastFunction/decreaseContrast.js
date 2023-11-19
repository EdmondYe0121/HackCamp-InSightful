function decreaseContrast() {
    chrome.storage.sync.get('contrast', function(data) {
        let currentContrast = data.contrast || 100; 
        let newContrast = currentContrast - 2; 

        newContrast = Math.max(newContrast, 50);

        document.querySelectorAll('*').forEach(function(element) {
            element.style.filter = `contrast(${newContrast}%)`;
        });

        chrome.storage.sync.set({ 'contrast': newContrast }, function() {
            console.log('Contrast decreased to:', newContrast);
        });
    });
}

decreaseContrast();
