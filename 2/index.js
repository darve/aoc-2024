
const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

let num_safe = 0;
let num_unsafe = 0;

input.map((line) => {

    let safe = true;
    let _ = null;
    let direction = null;
    let num_fails = 0;

    line.split(' ').map((char) => {
        let num = parseInt(char);
        if (num_fails > 1) return;


        if (_) {
            if (_ < num) {
                if (direction == 'down') {
                    safe = false;
                }
                direction = 'up';
            }

            if (_ == num) {
                num_fails++;
            }

            if (_ > num) {
                if (direction == 'up') {
                    num_fails++;
                }
                direction = 'down';
            }

            if (Math.abs(_ - num) > 3) {
                num_fails++;
            }
        }

        _ = num;
    });

    if (num_fails <= 1) {
        num_safe++;
    } else {
        num_unsafe++;
    }
});

console.log(num_safe, num_unsafe);

