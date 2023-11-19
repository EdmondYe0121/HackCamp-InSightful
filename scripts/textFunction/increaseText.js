function increaseFontSize() {
    var allElements = document.querySelectorAll('*');
    allElements.forEach(function(element) {
        var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
        var currentSize = parseFloat(style);
        element.style.fontSize = (currentSize + 1) + 'px'; // Increase by 1px, adjust as needed
    });
    
}

increaseFontSize();