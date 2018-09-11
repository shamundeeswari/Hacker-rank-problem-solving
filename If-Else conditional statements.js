/*

Conditional Statements: If-Else
Objective

In this challenge, we learn about if-else statements. Check out the attached tutorial for more details.

Task

Complete the getGrade(score) function in the editor. It has one parameter: an integer, 
score denoting the number of points Julia earned on an exam. It must return the letter corresponding to her 
grade  according to the following rules:

if 25 < score <= 30 , then grade = A,
if 20 < score <= 25 , then grade = B,
if 15 < score <= 20 , then grade = C,
if 10 < score <= 15 , then grade = D,
if 05 < score <= 10 , then grade = E,
if 0 < score <= 5 , then grade = F,
Input Format

Stub code in the editor reads a single integer denoting  SCORE from stdin and passes it to the function.

Constraints

 0 <= SCORE <= 30

 Output format

 The function must return the value of grade (i.e., the letter grade) that Julia earned on the exam.

 sample input : 11
 sample output : D

 Explanation 0

Because score =11 , it satisfies the condition 10 < score <= 15 (which corresponds to D). Thus, we return D as our answer.
 

*/
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}


function getGrade(score) {
    let grade;
    // Write your code here
    
    if (0 <= score && 5 >= score){
        grade  = 'F';
    }
    else if(5 <= score && 10 >= score){
         grade  = 'E';
    }
    else if (10 <= score && 15 >= score){
         grade  = 'D';
    }
    else if (15 <= score && 20 >= score){
         grade  = 'C';
    }
     else if (20 <= score && 25 >= score){
         grade  = 'B';
    }
    else if (25 <= score && 30 >= score)
        {
             grade  = 'A';
        }
    
    return grade;
}
function main() {
    const score = +(readLine());
    
    console.log(getGrade(score));
}