const args = process.argv;
var pass_arg = args[2];
var tgt = args[3];

function countBs(b_str){
    var b_count = 0;
    b_length = b_str.length;
    for (var x = 0; x < b_length; x++){
        if (b_str.charAt(x) == "B"){b_count++;};
    };
    return b_count;
};

function countChar(char_str, tgt_char){
    var tgt_count = 0;
    char_length = char_str.length;
    for (var x = 0; x < char_length; x++){
        if (char_str.charAt(x) == tgt_char){tgt_count++;};
    };
    return tgt_count;
};

console.log(`Bs Counted: ${countBs(pass_arg)}`);
if (tgt != undefined){
    console.log(`${tgt}s Counted ${countChar(pass_arg, tgt)}`);
};