// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 0; i <= 100; i++){
    if (i % 2 == 1)
    {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 0; i <= 100; i++ ){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ");
    } if (i % 3 == 0 && i % 5 != 0) {
        console.log("FIZZ");
    } if (i % 5 == 0 && i % 3 != 0) {
        console.log("BUZZ");
    } if (i % 3 != 0 && i % 5 != 0) {
        console.log(i);
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

var number = 100;

while (number >= 0) {
    number --;
    if (number % 2 == 1) {
        console.log(number);
    }
}

var number = 100;

while (number > 0) {
    number--;
    if (number % 3 == 0 && number % 5 == 0) {
        console.log("FIZZBUZZ");
    } if (number % 3 == 0 && number % 5 != 0) {
        console.log("FIZZ");
    } if (number % 5 == 0 && number % 3 != 0) {
        console.log("BUZZ");
    } if (number % 3 != 0 && number % 5 != 0) {
        console.log(number);
    }
}

// Exercise 4 Section
console.log("EXERCISE 4: \n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 0; i <= n; i++) {
    if (i == value) {
        console.log("Found value!");
        break;
    } if (i != value) {
        console.log("Value not found");
        break;
    }
}