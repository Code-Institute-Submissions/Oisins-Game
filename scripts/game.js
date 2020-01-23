var buttons = ["green", "red", "yellow", "blue"];
var patternToPlay = [];
var playersPattern = [];
var level = 4;
var playerScore = 0;
var lives = 3;
var chosenColor;

var isPlayersTurn = false;
var aiTurn = true;
var gameOver = false;

var greenBtnPressed = document.getElementById("green").addEventListener("click", greenBtnPressed);
var redBtnPressed = document.getElementById("red").addEventListener("click", redBtnPressed);
var yellowBtnPressed = document.getElementById("yellow").addEventListener("click", yellowBtnPressed);
var blueBtnPressed = document.getElementById("blue").addEventListener("click", blueBtnPressed);
var playButton = document.getElementById("play").addEventListener("click",aiPlays);

function aiPlays() {
    
    patternToPlay = [];
     aiTurn =true;
    do{
       playersPattern = [];
        for (var i = 0; i < level; i++) {
            var rand = Math.floor(Math.random() * 4);
           
            chosenColor = rand;
            patternToPlay.push(buttons[chosenColor]);
           

        }
         console.log(patternToPlay);


        for (let i = 0; i < patternToPlay.length; i++) {
            var str = "#" + patternToPlay[i];

            anim(str, i);

        }
        aiTurn =false;
        playersTurn = true;
    
    } while(aiTurn)
   
}



function anim(str, i) {
    setTimeout(function () {
        $(str).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50)


    }, 1000 * i);
}

function playerAnim(str) {
    setTimeout(function () {
        $(str).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50)


    }, 100);
}

function greenBtnPressed() {
    var str = "#green";
    playerAnim(str);
    playersPattern.push("green");
    checkArrays();
}

function redBtnPressed() {
    var str = "#red";
    playerAnim(str);
    playersPattern.push("red");
    checkArrays();

}

function yellowBtnPressed() {
    var str = "#yellow";
    playerAnim(str);
    playersPattern.push("yellow");
    checkArrays();
   
}

function blueBtnPressed() {
    var str = "#blue";
    playerAnim(str);
    playersPattern.push("blue");
    checkArrays();
   

}

function checkArrays(){
      if (playersPattern.length < patternToPlay.length) {
        console.log("carry on");
    } else if (playersPattern.length > patternToPlay.length) {
        alert("Too many")
        console.log("stop game");
    } else if (playersPattern.length == patternToPlay.length) {
        checkAiVsPlayer();
    }
}

function checkAiVsPlayer() {
    if (JSON.stringify(patternToPlay) === JSON.stringify(playersPattern)) {
        level++;
        playerScore++;
        aiTurn = true;
        console.log("WINNER WINNER CHICKEN DINNER" + playerScore +level + patternToPlay.length);
        
        updatePlayerScore(playerScore,lives);
        aiPlays();
    } else if (JSON.stringify(patternToPlay) != JSON.stringify(playersPattern)) {
        gameOver = true;
        --lives;
        updatePlayerScore(playerScore,lives);
        alert("YOU LOST HA HA!");
    }
   

}

function updatePlayerScore(playerScore,lives) {
    var score = playerScore.toString();
    var lives = lives.toString();
    console.log(score,lives);
    document.getElementById('player').textContent = score;
    document.getElementById('lives').textContent = score;
}










anim();



    