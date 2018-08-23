'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
let positives = 0
let negatives = 0
let zero = 0
arr.map( e => {
    e == 0 ? zero++ : (e > 0 ? positives++ : negatives++)
})
console.log((positives / arr.length).toFixed(6))
console.log((negatives / arr.length).toFixed(6))
console.log((zero / arr.length).toFixed(6))

}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}