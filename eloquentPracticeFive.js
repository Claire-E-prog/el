//Higher order functions
//Arrow functions - decompose normal functions to arrow functions

// Traditional anonymous function
(function (a) {
    return a + 100;
});

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
    return a + 100;
};

// 2. Remove the body braces and word "return" — the return is implied.
(a) => a + 100;

// 3. Remove the parameter parentheses
a => a + 100;

/*
The parentheses can only be omitted if the function has a single simple parameter. 
If it has multiple parameters, no parameters, or default, destructured, or rest parameters, 
the parentheses around the parameter list are required.
**/
// Traditional anonymous function
(function (a, b) {
    return a + b + 100;
  });
  
  // Arrow function
  (a, b) => a + b + 100;
  
  const a = 4;
  const b = 2;
  
  // Traditional anonymous function (no parameters)
  (function () {
    return a + b + 100;
  });
  
  // Arrow function (no arguments)
  () => a + b + 100;
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