

// Day 2 answer 1..
import {Day2Input} from "./day2Input.js";

let validCount = 0;

for(let i = 0; i< Day2Input.length; i++) {
    let passwordObj = Day2Input[i];
    let parts = passwordObj.split(":");
    let password = parts[1];
    let otherParts = parts[0].split(' ');
    let letter = otherParts[1];
    let minMax = otherParts[0].split('-');
    let min = minMax[0];
    let max = minMax[1];

    var count = (password.match(new RegExp(letter, "g")) || []).length;
    if (count >= min && count <= max) {
        validCount++;
    }

}
console.log(validCount);



// Day 2 answer 2
// let validCount = 0;
//
// for(let i = 0; i< passwords.length; i++) {
//     let passwordObj = passwords[i];
//     let parts = passwordObj.split(":");
//     let password = parts[1].trim();
//     let otherParts = parts[0].split(' ');
//     let letter = otherParts[1];
//     let minMax = otherParts[0].split('-');
//     let min = minMax[0] - 1;
//     let max = minMax[1] - 1;
//
//     if ((password[min] == letter && password[max] != letter) || (password[max] == letter && password[min] != letter)) {
//         validCount++;
//     }
//
// }
// console.log(validCount);
