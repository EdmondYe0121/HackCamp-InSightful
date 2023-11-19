function changeFontArial() {

    var allElements = document.querySelectorAll('*');
    allElements.forEach(function(element) {
        element.style.fontFamily = 'Arial, sans-serif'; // Set font to Arial, concatenate strings
        element.style.letterSpacing = '1px'; // Wider letter spacing increases readibility (for Arial)
    });

}

changeFontArial()