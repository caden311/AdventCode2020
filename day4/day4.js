import {Day4Input} from "./day4Input.js";


var required = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
let eyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
let validCount = 0;
var items = Day4Input.split("\n\n");
items.forEach(item => {
    var dict = {};
    var attr1 = item.split('\n');
    attr1.forEach(attr => {
        var attr2 = attr.split(' ');
        attr2.forEach(attr3 => {
            let keyVal = attr3.split(':');
            dict[keyVal[0]] = keyVal[1];
        });
    });
    let valid = true;
    required.forEach(req => {
        let val = dict[req];
        if (!val) {
            valid = false;
            return;
        }
        if (req === "byr" && (val.length !== 4 || +val<1920 || +val > 2002 )) {
            valid = false;
        }
        if (req === "iyr" && (val.length !== 4 || +val<2010 || +val > 2020 )) {
            valid = false;
        }
        if (req === "eyr" && (val.length !== 4 || +val<2020 || +val > 2030 )) {
            valid = false;
        }
        if (req === "hgt") {
            if (val.indexOf('cm') !== -1) {
                let height = val.substr(0, val.indexOf('cm'));
                if (+height < 150 || +height > 193) {
                    valid = false;
                }
            } else if (val.indexOf('in') !== -1) {
                let height = val.substr(0, val.indexOf('in'));
                if (+height < 59 || +height > 76) {
                    valid = false;
                }
            } else {
                valid = false;
            }
        }
        if (req === "hcl" && val.match(/#[0-9a-f]{6}/) == null) {
            valid = false;
        }
        if (req === "ecl" && eyeColors.indexOf(val) === -1) {
            valid = false;
        }
        if (req === "pid" && (val.match(/^\d+$/) == null || val.length !== 9)) {
            valid = false;
        }

    });

    if (valid) {
        validCount++;
    }
});



console.log(validCount);
