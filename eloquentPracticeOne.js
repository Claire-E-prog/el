//Loops
//looping a triangle
let hash = "#"
console.log(hash);
for (let counter = 0; counter < 7; counter++){
    hash = hash + "#";
    console.log(hash);
}
console.log("hello");

//looping a chessboard
let hash1 = " # # # #";
let hash2 = "# # # #";
for (let iter = 0; iter <= 8; iter ++){
    if (iter % 2 == 0) {
        console.log(hash1);
    } else {
        console.log(hash2);
    }
}

//fizzbuzz
for (let i = 1; i <= 100; i++){
    if (i % 3 == 0) {
        console.log("Fizz");
    } if (i % 5 == 0) {
        console.log("Buzz");
    } if (i%3 == 0 && i%5 == 0) { 
        console.log("FizzBuzz");
    } else {
        console.log(i);
    }
}


