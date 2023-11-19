function darkOff () {
    
    
    document.querySelector("html").style.filter = "invert(0) hue-rotate(180deg)";
    // document.body.style.filter = "invert(1) hue-rotate(180deg)"
    let media = document.querySelectorAll("img, picture, video");
    media.forEach((mediaItem) => {
        mediaItem.style.filter = "invert(0) hue-rotate(180deg)"
    })

};

darkOff();
