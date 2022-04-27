import {Day7Input} from "./day7Data.js";


let lines = Day7Input.split('\n');
let dict = {};
for (let line of lines) {
    let info = line.split('contain');
    let color = /(.*) bag/g.exec(info[0]);
    if (!dict[color[1].trim()]) {
        dict[color[1]] = {};
    }
    let parts = info[1].split(',');
    for (let part of parts) {
        let group = /(\d+)(.*) bag/g.exec(part);
        if (!group) {
            continue;
        }
        dict[color[1].trim()][group[2].trim()] = +group[1];
    }

}
let targetKey = "shiny gold";
let totalCount = 0;

//question 2

recurse(dict[targetKey], 1);
function recurse(startDict, prevCount) {
    if (Object.keys(startDict).length == 0) {
        return 0;
    }
    let levelCount = 0;
    for (let color in startDict) {
        levelCount += startDict[color];
    }
    totalCount += prevCount * levelCount;
    for (let color in startDict) {
        recurse(dict[color], startDict[color] * prevCount);
        console.log(totalCount);
    }
    return levelCount;
}

console.log(totalCount);



// question 1

// for (let baseColor in dict) {
//     parseDict(dict, baseColor);
// }
// function parseDict(dict, key) {
//     if (dict[key][targetKey]) {
//         totalCount++;
//         return true;
//     }
//     for (let color in dict[key]) {
//         if(parseDict(dict, color)) {
//             return true;
//         }
//     }
// }
//
// console.log(totalCount);
