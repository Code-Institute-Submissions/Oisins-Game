var sudokuArray = [];
var rows = 9;
var cols = 9;

 function genSudArray(sudokuArray,rows,cols){
     for(var i = 0;i < rows;i++){
            sudokuArray.push[0];
         for(var j =0;j < cols;j++){
            var rand = Math.floor(Math.random()* 9 +1);
            sudokuArray[i][j] = rand;
            console.log(sudokuArray[i][j]);
         }
         

     }
 }


 genSudArray();