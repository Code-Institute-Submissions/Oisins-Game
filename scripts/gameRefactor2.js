var buttons = ["green", "red", "yellow", "blue"];
var sound1 = new Audio("assets/sounds/simonSound1.mp3");
var sound2 = new Audio("assets/sounds/simonSound2.mp3");
var sound3 = new Audio("assets/sounds/simonSound3.mp3");
var sound4 = new Audio("assets/sounds/simonSound4.mp3");
var lose = new Audio("assets/sounds/lose.mp3");
var wrong = new Audio("assets/sounds/phaserDown3.ogg");
var correct = new Audio("assets/sounds/powerUp1.ogg");
var sounds = [sound1, sound2, sound3, sound4];

var patternToPlay = [];
var playersPattern = [];
var level = 2;
var playerScore = 0;
var lives = 3;
var chosenColor;

var isPlayersTurn = false;
var aiTurn = true;
var gameOver = false;

//listeners 
var playButton = document.getElementById("play").addEventListener("click", aiPlays);

$(".mycontainer").on("click", ".btns", btnPressed);

$("#reset").on("click", resetPressed);


// when button pressed by player the animation/sound play and players choice 
//added to their array and then checked against AI's selection
function btnPressed() {
    var str = $(this).attr("value");
    var id = $(this).attr("id");
    playerAnim(str);
    if (str === "#green") {
        sounds[0].play();
    } else if (str === "#red") {
        sounds[1].play();
    } else if (str === "#blue") {
        sounds[2].play();
    } else if (str === "#yellow") {
        sounds[3].play();
    }
    playersPattern.push(id);
    checkArrays();
}
// reset button 
function resetPressed() {
    lives = 3;
    level = 2;
    score = 0;
    updatePlayerScore(score, lives, level);

}



// Generate an array of colors to play and play them
function aiPlays() {
    patternToPlay = [];
    aiTurn = true;
    do {
        playersPattern = [];
        for (let i = 0; i < level; i++) {
            var rand = Math.floor(Math.random() * 4);
            chosenColor = rand;
            patternToPlay.push(buttons[chosenColor]);
        }// LEAVING THIS CONSOLE LOG JUST SO IT CAN BE USED BY ASSESSOR OF PROJECT
        console.log(patternToPlay);
        for (let i = 0; i < patternToPlay.length; i++) {
            var str = "#" + patternToPlay[i];
            anim(str, i);
        }
        aiTurn = false;
        playersTurn = true;

    } while (aiTurn)

}


// AI's button animation along with sound
function anim(str, i) {
    setTimeout(function () {
        $(str).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50)
        if (str === "#green") {
            sounds[0].play();
        } else if (str === "#red") {
            sounds[1].play();
        } else if (str === "#blue") {
            sounds[2].play();
        } else if (str === "#yellow") {
            sounds[3].play();
        }
    }, 1000 * i);

}
// Players button animation
function playerAnim(str) {
    setTimeout(function () {
        $(str).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50)

    }, 100);
}


// checks arrays and 
function checkArrays() {
    if (playersPattern.length < patternToPlay.length) {
    } else if (playersPattern.length > patternToPlay.length) {
    } else if (playersPattern.length == patternToPlay.length) {
        checkAiVsPlayer();
    }
}
// checks if player played the correct sequence
function checkAiVsPlayer() {
    if (JSON.stringify(patternToPlay) === JSON.stringify(playersPattern)) {
        setTimeout(function () {
            correct.play();
        }, 500);

        ++level;
        ++playerScore;
        updatePlayerScore(playerScore, lives, level);
        setTimeout(function () {
            aiPlays();
        }, 3000);

    } else if (JSON.stringify(patternToPlay) != JSON.stringify(playersPattern)) {
        setTimeout(function () {
            wrong.play();
        }, 500);

        --lives;
        if (lives > 0) {
            updatePlayerScore(playerScore, lives, level);
            setTimeout(function () {
            aiPlays();
        }, 2000);
            
        } else if (lives <= 0) {
            // update message telling player they have lost
            updatePlayerScore(playerScore, lives, level);
            lose.play();
            document.getElementById("message").textContent = "You Lost";
            setTimeout(function () {
                resetPressed();
                document.getElementById("message").textContent = "Press play to begin";
            }, 10000);
        }
    }


}
// changes the scoreboard
function updatePlayerScore(playerScore, lives, level) {
    var temp = level;
    --temp;
    temp = temp.toString();
    var score = playerScore.toString();
    var lives = lives.toString();
    document.getElementById("player").textContent = score;
    document.getElementById("lives").textContent = lives;
    document.getElementById("level").textContent = temp;
}

function showModal(){
    $('#myModal').modal('show');
}

