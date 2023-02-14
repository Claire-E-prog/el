/**
 * Write a function countBs that takes a string as its only 
 * argument and returns a number that indicates how many uppercase “B” characters there are in the string.
 */

function countBs(string) {
    let count = 0;
    for (i = 0; i <= string.length; i++) {
        if (string[i] == "B") {
            count += 1;
        }
    }
    return count;
}

/**
 * Next, write a function called countChar that behaves like countBs, except it takes a second argument that 
 * indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs 
 * to make use of this new function.
 */

function countChar(string, character) {
    let count = 0;
    for (i = 0; i <= string.length; i++) {
        if (string[i] == character) {
            count += 1;
        }
    }
    return count;
}

/**
 * 
 *Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 
 */
function arrayToList(array) {
    let list;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}

console.log(arrayToList([10, 20]));

/**
 * 
 * Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes 
 an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes 
 a list and a number and returns the element at the given position in the list
(with zero referring to the first element) or undefined when there is no such element.
If you haven’t already, also write a recursive version of nth.
 */

//function that uses ...numbers
function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}
console.log(max(4, 1, 9, -2));