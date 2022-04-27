import {Day3Input} from "./day3Input.js";

// day 3 problem 1
// let treeCount = 0;
// let column = 0;
// for (let i=1; i<Day3Input.length; i++) {
//     const val = Day3Input[i];
//     column +=3;
//     if (column > val.length -1) {
//         column = column - val.length;
//     }
//     if (val.charAt(column) == '#') {
//         treeCount++;
//     }
// }
// console.log(treeCount);


// day 3 problem 2

let options = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
];
const trees = [];
for (let opt of options) {
    let column = 0;
    let treeCount = 0;
    for (let i=opt[1]; i<Day3Input.length; i+=opt[1]) {
        const val = Day3Input[i];
        column +=opt[0];
        if (column > val.length -1) {
            column = column - val.length;
        }
        if (val.charAt(column) == '#') {
            treeCount++;
        }
    }
    trees.push(treeCount);
    console.log(treeCount);
}
let total = 1;
for (let t of trees) {
    total = total * t;
}
console.log(total);
