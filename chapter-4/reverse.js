


function reverse_Array(array){
    var arr_len = array.length;
    var new_arr = [];
    for (var x = arr_len - 1; x >= 0; x--){
        new_arr.push(array[x]);
    }
    return new_arr;
}

function reverse_in_place(array){
    var arr_len = array.length;
    var end = arr_len - 1;
    var temp = 0;
    for (var x = 0; x < Math.floor(arr_len/2); x++){
        temp = array[x];
        array[x] = array[end];
        array[end] = temp;
        end --;
    }
    return array;
}

console.log(reverse_Array([1,2,3,4,5,6]));
console.log(reverse_in_place([1,2,3,4,5,6]));

/*
reverse_Array creates a new array as a side effect of the function.
reverse_in_place is a pure function. 

Pure function is more useful, since it a modifies an already useful array.
Reverse_in_place is more efficient. Only loops through half the array, 
instead of looping through entire array.