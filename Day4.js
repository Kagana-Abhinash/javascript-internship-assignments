
console.log("-- Multiplication Table of 5 --");

for (let i = 1; i <= 5; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}

console.log("-- First number > 10 divisible by 6 --");

let number = 11;

while (true) {
    if (number > 10 && number % 6 === 0) {
        console.log("Found:", number);
        break;
    }

    number++;
}

console.log("-- Odd numbers using do...while --");

let i = 0;

do {
    i++;

    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
} while (i < 5);
