// Your code here.

function deepEqual(obj_1, obj_2){
    //First check to see if these two values are the same, or the same by reference if they objects.
    if (obj_1 === obj_2){
        return true;
    }

    //Next check to see if both items are objects, but not null value. 
    if (typeof obj_1 === 'object' && obj_1 != null && typeof obj_2 === 'object' && obj_2 != null){
        //Return false if the two objects have different lengths.
        if (Object.keys(obj_1).length != Object.keys(obj_2).length) {
           return false; 
        };
        //Loop through each element in the first object. 
        for (element in obj_1){
            //Check if the current element is also in the second object. Returns false if not found.
            if (element in obj_2){
                //Recursively check equality of both elements with deep equals. 
                if (deepEqual(obj_1[element], obj_2[element]) == false){
                    return false;
                }
            }
            else return false;
            
        };
   
    }
    //If both elements are not objects, then check their equality. Return false if they are not equal.
    else if (obj_1 !== obj_2) return false;
    
    return true;
};

var obj = {here: {is: "an"}, object: 2};

var user1 = {
    name: "John",
    address: {
        line1: "55 Green Park Road",
        line2: "Purple Valley"  
    }
}


console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(obj, {here: {is: "an"}, object: 2, another: "object"}));
// → false
console.log(deepEqual(user1, {name: "John", address: {line1: "55 Green Park Road", line2: "Black Valley"}}));
// → false