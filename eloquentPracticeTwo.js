//Functions are wacky in JavaScript

const makeNoise = function () {
    console.log("aaaahhhhhhhhhh");
}


makeNoise();

const power = function (base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
};

console.log(power(3, 2));

//variable declared with let and const are local to the block
//blocks create degrees of locality:
const hummus = function (factor) {
    const ingrediant = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s"
        }
        console.log('${ingredientAmount} ${unit} ${name}');
    };

}