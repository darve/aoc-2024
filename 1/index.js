const fs = require('fs');
const data = fs.readFileSync('./input.txt').toString().split('\n');

let left = [];
let right = [];
let output = 0;

data.map((line) => {
    let [l, r] = line.split('   ');
    left.push(parseInt(l));
    right.push(parseInt(r));
});

left.sort((a, b) => a - b);
right.sort((a, b) => a - b);

left.map((el, i) => {
    output += Math.abs(el - right[i]);
});

let similarity = {};

left.map((el, i) => {
    right.map((el2, j) => {
        if (el == el2) {
            if (el in similarity) {
                similarity[el] += 1;
            } else {
                similarity[el] = 1;
            }
        }
    });
});

let score = 0;

Object.keys(similarity).map((key) => {
    score += key * similarity[key];
});


console.log(score);