let pats = 0;
let canPat = true;
let squeak = new Audio("squeak.mp3");

function harleypat() {
    if (!canPat) return;
    squeak.currentTime = 0;
    squeak.play();
    canPat = false;
    pats++;
    let cooldown = 800; // Default cooldown for non-special pat counts, how do you know?
    
    if (pats == 1 || pats == 10 || pats == 30 || pats == 50) {
        cooldown = 2000;
    }
     if (pats == 2 || pats == 20) {
        cooldown = 3000;
    }
     setTimeout(function() {
        canPat = true;
    }, cooldown);
    
let dialogue = document.getElementById("dialogue");

    document.getElementById("harley-container").classList.add("bounce");

    setTimeout(function() {
        document.getElementById("harley-container").classList.remove("bounce");
    }, 300);
    
    if (pats == 1 || pats == 10 || pats == 30 || pats == 50) {
        document.getElementById("harley").classList.add("paused");

        setTimeout(function() {
            document.getElementById("harley").classList.remove("paused");
        }, 2000);
    
    }
    
    if (pats == 2 || pats == 20) {
        document.getElementById("harley").classList.add("paused");

        setTimeout(function() {
            document.getElementById("harley").classList.remove("paused");
        }, 3000);
    
    }
    

    if (pats == 1) {
        document.getElementById("harley").src = "angy harley 2.jpg";
            dialogue.textContent = "What.";
        setTimeout(function() {
            dialogue.textContent = "";
        }, 2000);
    }

    if (pats == 1) {
    let caution = document.getElementById("caution");
let cautionText = document.getElementById("caution-text");

cautionText.textContent = "YOU EVIL NOW WE ARE ALL DOOMED!!!!";
caution.classList.add("stopped");
}
    if (pats == 2) {
        document.getElementById("harley").src = "annoyed harley 3.jpeg";
            dialogue.textContent = "I am the head of Special Projects. There is no purpose in touching me.";
        setTimeout(function() {
            dialogue.textContent = "";
        }, 3000);
    }
    if (pats == 10) {
        document.getElementById("harley").src = "pissed harley 4.jpeg";
             dialogue.textContent = "You're enjoying this, are you?";
        setTimeout(function() {
            dialogue.textContent = "";
        }, 2000);
    }
    if (pats == 20) {
        document.getElementById("harley").src = "ANGYer harley 5.jpeg";
            dialogue.textContent = "That's enough.";
        setTimeout(function() {
            dialogue.textContent = "";
        }, 3000);
    }
    if (pats == 30) {
        document.getElementById("harley").src = "ignrore harley 6.jpeg";
            dialogue.textContent = "You're not worth my time.";
        setTimeout(function() {
            dialogue.textContent = "";
        }, 2000);
    }
    if (pats == 50) {
        document.getElementById("harley").src = "observing harley 7.webp";
          dialogue.textContent = "...";
        setTimeout(function() {
            dialogue.textContent = "";
        }, 2000);
    }
}
