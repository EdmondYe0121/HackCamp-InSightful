function changeFontVerdana() {

    var allElements = document.querySelectorAll('*');
    allElements.forEach(function(element) {
        element.style.fontFamily = 'Courier, sans-serif'; // Set font to Verdana, concatenate strings
        element.style.letterSpacing = '0px'; // Correcting letter spacing
    });

}

changeFontVerdana()