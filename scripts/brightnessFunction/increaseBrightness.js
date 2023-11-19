function increaseBrightness() {
    chrome.storage.sync.get('brightness', function(data) {
        let currentBrightness = data.brightness || 100; 
        let newBrightness = currentBrightness + 2; // Increase brightness by 10%

        newBrightness = Math.min(newBrightness, 150);

        document.querySelectorAll('*').forEach(function(element) {
            element.style.filter = `brightness(${newBrightness}%)`;
        });

        chrome.storage.sync.set({ 'brightness': newBrightness }, function() {
            console.log('Brightness increased to:', newBrightness);
        });
    });
}

increaseBrightness();
