function decreaseBrightness() {
    chrome.storage.sync.get('brightness', function(data) {
        let currentBrightness = data.brightness || 100; 
        let newBrightness = currentBrightness - 2; 

        newBrightness = Math.max(newBrightness, 50);

        document.querySelectorAll('*').forEach(function(element) {
            element.style.filter = `brightness(${newBrightness}%)`;
        });


        chrome.storage.sync.set({ 'brightness': newBrightness }, function() {
            console.log('Brightness decreased to:', newBrightness);
        });
    });
}

decreaseBrightness();
