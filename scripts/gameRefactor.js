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


function aiPlays(){
    
}