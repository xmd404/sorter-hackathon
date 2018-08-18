let textArray = ["Good evening Earthling!", 
                "As the last of your kind - the robot people of the Omicron-Setcon 8 would like to offer you a proposition...",
                "We would like to transport you to a new organic based civilization, but you can only bring 3 relics of humanity with you...",
                "You may bring the best of humanity's literature, games, music, movies or social media",
                "You may only choose three.  You must tell us why.  You only have 2 minutes to decide before Earth implodes."]

let bubble = document.querySelector(".textbubble");

for (i=0; i<textArray.length; i++) {
    let text = document.createElement("div");
    text.textContent = textArray[i];
    text.classList.add("centered");
    if (i === 0) {
        text.classList.add("firstPrompt");
    } else if (i === 1) {
        text.classList.add("secondPrompt");
    } else if (i === 2) {
        text.classList.add("thirdPrompt");
    } else if (i === 3) {
        text.classList.add("fourthPrompt");
    } else if (i === 4) {}
    let drawText = function() {
        bubble.appendChild(text);
    }
    setInterval(drawText, 5000);
        
}