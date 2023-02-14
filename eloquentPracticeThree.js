//Practice Function stuff

//Closure - being able to to reference a specific instance of a local 
//binding in an enclosing scope is called closure

//Create a local binding with a function
function wrapValue(n) {
    let local = n;
    return () => local;
}
//variable holds function value
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

console.log(wrap1());
console.log(wrap2());

//create functions that multiply arbitrarily
function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));

//LOOK UP CLOSURE

//Recursion
function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

//power(base, exponent)
// base * power(base, exponent - 1)
// base * (base * power(base, exponet - 2))
// base * (base * (base * power(base, exponent - 3)))





//write a function that finds the minimum of two numbers
console.log("Hello");

function min(a, b) {
    if (a < b) {
        return a;
    } if (b < a) {
        return b;
    }
    return minimum;
}

console.log("hello");
console.log(min(2, 3));

//Function to determine if a number is even
function isEven(n) {
    if ((n + 2) % 2 == 0) {
        return true;
    } else {
        return isEven(n);
    }
    
}



