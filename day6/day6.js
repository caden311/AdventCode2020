import {Day6Input} from "./day6Input.js";


// answer 1
// let group = Day6Input.split('\n\n');
// let total = 0;
// for (let people of group) {
//     let dict = {};
//     for (let i =0 ;i < people.length; i++) {
//         if (people.charAt(i) == '\n') {
//             continue;
//         }
//         dict[people.charAt(i)] = 1;
//     }
//     total += Object.keys(dict).length;
// }
// console.log(total);

// answer 2

let group = Day6Input.split('\n\n');
let total = 0;
for (let people of group) {
    let dict = {};
    let persons = people.split('\n');
    let count = 0;
    for (let p of persons) {
        for (let i = 0; i<p.length; i++) {
            let char = p.charAt(i);
            if (!dict[char]) dict[char] = 0;

            dict[char]++;
            if (dict[char] == persons.length) {
                count++;
            }
        }
    }
    total += count;

}
console.log(total);
