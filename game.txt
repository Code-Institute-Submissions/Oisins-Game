var buttons = ["green", "red", "yellow", "blue"];
var patternToPlay = [];
var playersPattern = [];
var level = 4;
var chosenColor;

var greenBtnPressed = document.getElementById("green").addEventListener("click",btnPressed);
var redBtnPressed = document.getElementById("red").addEventListener("click",btnPressed);
var yellowBtnPressed = document.getElementById("yellow").addEventListener("click",btnPressed);
var blueBtnPressed = document.getElementById("blue").addEventListener("click",btnPressed);

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

function btnPressed(){
    
}


anim();
aiPlays();