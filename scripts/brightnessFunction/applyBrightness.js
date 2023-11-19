function applyBrightness() {
    chrome.storage.sync.get('brightness', function(data) {
        console.log('Applying brightness:', data);
        if (data.brightness) {
            console.log('Applying brightness:', data.brightness);
            document.querySelectorAll('*').forEach(function(element) {
                element.style.filter = `brightness(${data.brightness}%)`;
            });
            console.log('Applied brightness:', data.brightness);
        }
    });
}

applyBrightness();