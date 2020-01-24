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


var playButton = document.getElementById("play").addEventListener("click",aiPlays);

 $('.mycontainer').on('click','.btns',btnPressed);

 $('#reset').on('click',resetPressed);

 function btnPressed(){
    var str = $(this).attr('value');
    var id = $(this).attr('id');
    playerAnim(str);
    playersPattern.push(id);
    checkArrays();
 }

 function resetPressed(){
     lives = 3;
     level = 4;
     
 }
  
  


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
        if(lives >= 0){
        updatePlayerScore(playerScore,lives);
        }else if(lives < 0){    
        alert("YOU LOST HA HA!");
        }
    }
   

}

function updatePlayerScore(playerScore,lives) {
    var score = playerScore.toString();
    var lives = lives.toString();
    console.log(score,lives);
    document.getElementById('player').textContent = score;
    document.getElementById('lives').textContent = lives;
}
