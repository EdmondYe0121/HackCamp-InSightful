function increaseContrast() {
    chrome.storage.sync.get('contrast', function(data) {
        let currentContrast = data.contrast || 100; 
        let newContrast = currentContrast + 2; 

        newContrast = Math.min(newContrast, 200);

        document.querySelectorAll('*').forEach(function(element) {
            element.style.filter = `contrast(${newContrast}%)`;
        });

        chrome.storage.sync.set({ 'contrast': newContrast }, function() {
            console.log('Contrast increased to:', newContrast);
        });
    });
}

increaseContrast();
