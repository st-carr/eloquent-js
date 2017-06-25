var black = "#";
var white = " ";
var board = "";
var board_length = 8;
var bool = 0;

for (var x = 0; x < board_length; x++){
    for (var y= 0; y < board_length; y++){
        if (bool == 0){
            board += black;
            bool = 1;
        }
        else if (bool == 1){
            board += white;
            bool = 0;
        }
    }
    board += "\n";
    if (bool == 0){bool = 1}
    else if (bool == 1){bool =0};
}

console.log(board)