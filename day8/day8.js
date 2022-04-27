import {Day8Input} from "./day8Input.js";

const lines = Day8Input.split('\n');
let i = 0;
let prevI = 0;
let acc = 0;
let instructionDict = {};
let optDict = {
  'acc': (amt) => { acc += amt; i++},
  'nop': ()=> {i++},
  'jmp': (amt) => {i += amt}
};
function computeNext(val) {
    if (!val) {
        console.log(acc);
    }
    let [operation, reg] = val.split(' ');
    reg = +reg;
    optDict[operation](reg);
    if (!instructionDict[i]) {
        instructionDict[i] = 1;
    } else {
        [operation, reg] = lines[i].split(' ');
        operation === 'jmp' ? operation = 'nop' : operation = 'jmp';
        lines[i] = operation + ' ' + reg;
        acc = 0;
        i = 0;
        instructionDict = {};
        computeNext(lines[0]);
    }
    computeNext(lines[i]);
}
computeNext(lines[i]);
