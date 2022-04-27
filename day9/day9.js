import {Day9Input} from "./day9Input.js";

let preamble = 25;

// var data = Day9Input.split('\n');
var data = Day9Input.split('\n');
data = data.map(d => +d);

// solution 1
// let i = 0;
// let foundBad = false;
//
// while(!foundBad) {
//     let set = data.slice(i, i + preamble);
//     let nextNum = data.slice(preamble + i, i + preamble +1)[0];
//     let found = false;
//     for (let j =0; j<set.length; j++) {
//         for (let k = 1; k<set.length; k++) {
//             if (j == k || found) continue;
//             if (set[j] + set[k] === nextNum) {
//                 i++;
//                 found = true;
//                 break;
//             }
//         }
//     }
//     if (!found) {
//         console.log(nextNum);
//         break;
//     }
// }

//
let answer = 41682220;
for (let i = 0; i<data.length; i++) {
    let count = 0;
    let min = 9999999999999999;
    let max = 0;
    for (let j = i+1; j<(data.length || count > answer); j++) {
        data[j] > max ? max = data[j] : null;
        data[j] < min ? min = data[j] : null;
        count += data[j];
        if (count == answer) {
            console.log(min + max);
        }
    }
}


