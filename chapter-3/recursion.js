const args = process.argv;
var pass_num = Number(args[2]);

function isEven(num){
    if (num < 0){num *= -1};
    
    if (num == 0){return true}
    else if (num == 1){return false};
    r_num = num - 2;
    return isEven(r_num);
};

var my_bool = isEven(pass_num);
if (my_bool == true){console.log(`${pass_num} is Even, Steven.`)}
else if (my_bool == false){console.log(`${pass_num} is Odd.`)};