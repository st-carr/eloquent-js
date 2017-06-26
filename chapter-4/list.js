

function array_to_list(array){
    var my_len = array.length - 1;
    var list = null;
    for (var x = my_len; x >=  0; x--){
        list = {value: array[x], next: list};
    }
    console.log(list);
    list_to_array(list);
    prepend(0, list);
    console.log(nth(4, list));
}

function list_to_array(list){
    var my_arr = [];
    var pointer = list;
    while (true) {
        if (pointer.next != null){
            my_arr.push(pointer.value);
            pointer = pointer.next;
        }
        else {
            my_arr.push(pointer.value);
            break;
        };
    };
    console.log(my_arr);
}

function prepend(element, list){
    list = {value: element, next: list};
    console.log(list);
}

count = 0;
function nth(target, list){
    count ++;
    if (list.value == target){
        return count;
    }
    else if (list.next == null){
        return undefined;
    }
    else {
        return nth(target, list.next);
    }
}

array_to_list([1,2,3,4]);
