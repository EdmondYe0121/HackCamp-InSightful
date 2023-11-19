function changeFontHelvetica() {

    var allElements = document.querySelectorAll('*');
    allElements.forEach(function(element) {
        element.style.fontFamily = 'Helvetica, serif'; // Set font to Helvetica, concatenate strings
        element.style.letterSpacing = '0px'; // Correcting letter spacing
    });

}

changeFontHelvetica()