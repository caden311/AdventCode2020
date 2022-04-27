import {Day5Input} from "./day5Input.js";


let lines = Day5Input.split('\n');
let colAmt = 7;
let rowAmt = 3;
let max = 0;
let dict = {};
for (let line of lines) {
    let col = [0, 127];
    let row = [0, 7];

    for (let i = 0 ;i<colAmt; i++) {
        let char = line.charAt(i);
        let amt = Math.ceil((col[1] - col[0]) /2);
        if (char == 'F') {
            col[1] -=amt;
        } else if (char == 'B') {
            col[0]+=amt;
        }
    }
    for (let i = colAmt ;i<colAmt + rowAmt; i++) {
        let char = line.charAt(i);
        let amt = Math.ceil((row[1] - row[0]) /2);
        if (char == 'L') {
            row[1] -=amt;
        } else if (char == 'R') {
            row[0]+=amt;
        }
    }
    let score = (col[0] * 8 + row[0]);
    dict[score] = 1;
    score > max ? max = score : null;

}
// answer to question 1

console.log(max);
let pastScore = dict[0] -1;
let mySeat;
for (let score in dict) {
    if (score -1 != pastScore) {
        mySeat = +pastScore + 1;
    }
    pastScore = score;
}
// answer to question 2
console.log(mySeat);
