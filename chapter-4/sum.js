const args = process.argv;
var my_start = args[2];
var my_end = args[3];
var my_step = args[4];

function start_end(start, end, step){
    var my_arr = [];
    if (step == undefined){
        step = 1;
    }

    if (step >= 0 && start < end){    
        for (var x = start; x <= end; x += step){
            my_arr.push(x);
        };
    }
    else if (step < 0 && start > end) {
        for (var x = start; x >= end; x += step){
            my_arr.push(x);
        };        
    }
    else {
        return "Invalid Input";
    }
    return sum_arr(my_arr);
};

function sum_arr(arr){
    var arr_len = arr.length;
    var total = 0;
    for (var x = 0; x < arr_len; x++){
        total += arr[x];
    }
    return total;
}

if (my_step == undefined) console.log(start_end(Number(my_start), Number(my_end)));
else console.log(start_end(Number(my_start), Number(my_end), Number(my_step)));