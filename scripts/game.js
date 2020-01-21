var buttons = ["green", "red", "yellow", "blue"];
var patternToPlay = [];
var playersPattern = [];
var level = 4;
var chosenColor;

var isPlayersTurn = false;
var gameOver = false;

var greenBtnPressed = document.getElementById("green").addEventListener("click",greenBtnPressed);
var redBtnPressed = document.getElementById("red").addEventListener("click",redBtnPressed);
var yellowBtnPressed = document.getElementById("yellow").addEventListener("click",yellowBtnPressed);
var blueBtnPressed = document.getElementById("blue").addEventListener("click",blueBtnPressed);

function aiPlays() {
    for (var i = 0; i < level; i++) {
        var rand = Math.floor(Math.random() * 4);
        //console.log(buttons[rand]);
        chosenColor = rand;
        patternToPlay.push(buttons[chosenColor]);
        console.log(patternToPlay);

    }



    for (let i = 0; i < patternToPlay.length; i++) {
        var str = "#" + patternToPlay[i];

        anim(str, i);

    }
}



function anim(str, i) {
    setTimeout(function () {
        $(str).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50)


    }, 2000 * i);
}

function greenBtnPressed(){
    playersPattern.push("green");
    if(playersPattern.length < patternToPlay.length){
        console.log("carry on");
    }else if (playersPattern.length > patternToPlay.length){
        console.log("stop game");
    }else if(playersPattern.length==patternToPlay.length){
        checkAiVsPlayer();
    }
}

function redBtnPressed(){
    playersPattern.push("red");
     if(playersPattern.length < patternToPlay.length){
        console.log("carry on");
    }else if (playersPattern.length > patternToPlay.length){
        console.log("stop game");
    }else if(playersPattern.length==patternToPlay.length){
        checkAiVsPlayer();
    }

}

function yellowBtnPressed(){
    playersPattern.push("yellow");
     if(playersPattern.length < patternToPlay.length){
        console.log("carry on");
    }else if (playersPattern.length > patternToPlay.length){
        console.log("stop game");
    }else if(playersPattern.length==patternToPlay.length){
        checkAiVsPlayer();
    }
}

function blueBtnPressed(){
    playersPattern.push("blue");
    if(playersPattern.length < patternToPlay.length){
        console.log("carry on");
    }else if (playersPattern.length > patternToPlay.length){
        console.log("stop game");
    }else if(playersPattern.length==patternToPlay.length){
        checkAiVsPlayer();
    }
    
}

function checkAiVsPlayer(){
    if(JSON.stringify(patternToPlay)===JSON.stringify(playersPattern)){
        alert(true);
    }else if(JSON.stringify(patternToPlay)!=JSON.stringify(playersPattern)){
        alert(false);
    }
    
}



anim();
aiPlays();