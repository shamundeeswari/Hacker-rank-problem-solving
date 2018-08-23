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

// Complete the miniMaxSum function below.
    
function miniMaxSum(arr) {
    // Complete this function

    let maxSum = 0,
        minSum = 0;
 arr.sort();
    for (var i = arr.length - 1, o = 0; i >= arr.length - 4, o < 4; i--, o++){
       maxSum += arr[i];
       minSum += arr[o];
    }
 console.log(minSum, maxSum)
}
function main() {
    const inArr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(inArr);
}