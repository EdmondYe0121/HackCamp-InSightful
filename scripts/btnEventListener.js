
document.getElementById('brightnessUp').addEventListener('click', () => {
    alert("Brightness up is clicked");
});


document.getElementById('textUp').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            files: ['scripts/textFunction/increaseText.js']
        });
    });
    
});

if(document.querySelector(".popup")) {
    const button = document.querySelector(".dark-button");
    const circle = document.querySelector(".circle")

    let buttonOn = false;
    button.addEventListener("click",()=>{
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            if(!buttonOn){
                buttonOn = true;
                circle.style.animation = "moveCircleRight 1s forwards";
                button.style.animation = "transformToWhite 1s forwards";
                chrome.scripting.executeScript({
                    target: {tabId: tabs[0].id},
                    files: ['scripts/darkFunction/appOn.js']
                });
            }
            else {
                buttonOn = false;
                circle.style.animation = "moveCircleLeft 1s forwards";
                button.style.animation = "transformToGrey 1s forwards";
                chrome.scripting.executeScript({
                    target: {tabId: tabs[0].id},
                    files: ['scripts/darkFunction/appOff.js']
                });
            }
        })
    })
}