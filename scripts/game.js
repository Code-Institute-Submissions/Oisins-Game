var buttons = ["green","red","yellow","blue"];
var patternToPlay = [];
var level = 3;  
var chosenColor;

function aiPlays(){
    for(var i=0;i<3;i++){
    var rand = Math.floor(Math.random()*4);
    //console.log(buttons[rand]);
    chosenColor = rand;
    patternToPlay.push(buttons[chosenColor]);
    //console.log(patternToPlay);
    
    }

    
     
       for(let i=0;i<patternToPlay.length;i++){
           var str= "#"+ patternToPlay[i];

             anim(str,i);
        
       }
    }

    
    
function anim(str,i){
    setTimeout(function(){
  $(str).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50)
      
        
},2000*i);
}


anim();
aiPlays();