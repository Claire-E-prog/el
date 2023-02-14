
/**
Write a range function that takes two arguments, 
start and end, and returns an array containing all the numbers from start up to (and including) end.

Then modify your range function to take an optional third argument 
that indicates the “step” value used when building the array. 
If no step is given, the elements go up by increments of one, corresponding to the old behavior. 
The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
 Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
 */
function range(start, end, step) {
    let array = [];
    array.push(start);

    if (step !== undefined && step < 0) {
        let count = start;
        for (let i = 1; i < start - 1; i++) {
            count += step;
            array.push(count);
        }
    } else if (step !== undefined && step > 0) {
        let count = start;
        for (let i = 1; i < end; i++) {
            count += step;
            array.push(count);
        }
    } else {
        let count = start
        for (let i = 1; i < end; i++) {
            count += 1;
            array.push(count);
        }
    }

    return array;
}
/**
 write a sum function that takes an array of numbers 
 and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
 */
function sum(array) {
    sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

//Run the functions:
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

/**
 * For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, 
 * takes an array as argument and produces a new array that has the same elements in the inverse order. 
 * The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as 
 * argument by reversing its elements. Neither may use the standard reverse method.
 */

//Reverse Method:
function reverseArray(array) {
    let newArray = [];
    for (let i = 0; i <= array.length + 1; i++) {
        let newNum = array.pop();
        newArray.push(newNum);
    }
    return newArray;
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

//Reverse in place

function reverseArrayInPlace(array) {
    for (i = 0; i < Math.floor(array.length / 2); i++) {
        firstNum = array[i];
        lastNum = array[array.length - i - 1];
        array[i] = lastNum;
        array[array.length - i - 1] = firstNum;

    }
    return array;
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]



