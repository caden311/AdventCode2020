

// Day 1 answer 1..

import {Day1Input} from "./day1Input.js";

for (let i = 0; i< Day1Input.length; i++) {
    for (let j = 0; j< Day1Input.length; j++) {
        if (i == j) {
            continue;
        }
        if (Day1Input[i] + Day1Input[j] == 2020) {
            console.log(Day1Input[i] * Day1Input[j]);
            break;
        }
    }
}



// Day 1 answer 2..
// for (let i = 0; i< Day1Input.length; i++) {
//     for (let j = 0; j< Day1Input.length; j++) {
//         for (let k = 0; k<Day1Input.length; k ++) {
//             if (i == j || i == k || j == k) {
//                 continue;
//             }
//             if (Day1Input[i] + Day1Input[j] + Day1Input[k] == 2020) {
//                 console.log(Day1Input[i] * Day1Input[j] * Day1Input[k]);
//                 break;
//             }
//         }
//     }
// }


