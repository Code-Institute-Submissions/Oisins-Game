var buttons = ["green", "red", "yellow", "blue"];
var sound1 = new Audio("simonSound1.mp3");
var sound2 = new Audio("simonSound2.mp3");
var sound3 = new Audio("simonSound3.mp3");
var sound4 = new Audio("simonSound4.mp3");
var lose = new Audio("lose.mp3");
var sounds = [sound1,sound2,sound3,sound4];

var patternToPlay = [];
var playersPattern = [];
var level = 2;
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
    if(str ==="#green"){
            sounds[0].play();
        }else if(str === "#red"){
            sounds[1].play();
        }else if(str === "#blue"){
            sounds[2].play();
        }else if(str ==="#yellow"){
            sounds[3].play();
        }
    playersPattern.push(id);
    checkArrays();
 }

 function resetPressed(){
     lives = 3;
     level = 2;
     score = 0;

     updatePlayerScore(score,lives,level);
     
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
        if(str ==="#green"){
            sounds[0].play();
        }else if(str === "#red"){
            sounds[1].play();
        }else if(str === "#blue"){
            sounds[2].play();
        }else if(str ==="#yellow"){
            sounds[3].play();
        }
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
        updatePlayerScore(playerScore,lives,level);
        setTimeout(function(){
            aiPlays();
        }, 3000);
        
    } else if (JSON.stringify(patternToPlay) != JSON.stringify(playersPattern)) {
        gameOver = true;
        --lives;
        if(lives > 0){
        updatePlayerScore(playerScore,lives,level);
        }else if(lives <= 0){    
        // update message telling player they have lost
        updatePlayerScore(playerScore,lives,level);
        lose.play();
        document.getElementById("message").textContent = "You Lost";
            setTimeout(function(){
            resetPressed();
            document.getElementById("message").textContent = "Press play to begin";
        }, 10000);
        }
    }
   

}

function updatePlayerScore(playerScore,lives,level) {
    var x = --level;
    
    var score = playerScore.toString();
    var lives = lives.toString();
    var z = x.toString();
    console.log(score,lives);
    document.getElementById('player').textContent = score;
    document.getElementById('lives').textContent = lives;
    document.getElementById('level').textContent = z;
}


