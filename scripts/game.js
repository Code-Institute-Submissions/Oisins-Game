function nextSequence() {

    var levelCounter = 11;
    var lives = 3;
    var iterator = 1;


    var seqArray = new Array(100);

    for (i = 0; i < seqArray.length; i++) {
        seqArray[i] = Math.floor(Math.random() * 5);
        console.log(seqArray[i]);
    }
    for (j = 0; j < levelCounter; j++) {
        if (seqArray[j] == 1) {
            console.log("green");
            $("#green").fadeOut(100);
            $("#green").fadeIn(100);
        
        } else if (seqArray[j] == 2) {
            console.log("red");
            $("#red").fadeOut(100);
            $("#red").fadeIn(100);
            
        } else if (seqArray[j] == 3) {
            console.log("yellow");
            $("#yellow").fadeOut(100);
            $("#yellow").fadeIn(100);
           
        } else if (seqArray[j] == 4) {
            console.log("blue");
            $("#blue").fadeOut(100);
            $("#blue").fadeIn(100);
           
        }

    }


}
function greenFades(){
    $
}

nextSequence();



