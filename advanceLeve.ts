// // console.log("welcome to coding question")
// 1. Merge Overlapping Intervals
// Medium
// Arrays + Sorting

// Given an array of intervals, merge all overlapping intervals.

// Example:
// Input:
// [[1,3], [2,6], [8,10], [9,12]]

// Output:
// [[1,6], [8,12]]


// Requirements:
// - Handle intervals that touch at their boundaries.
// - Handle nested intervals.
// - Return intervals in sorted order.
// Challenge: Can you solve this in \(O(n\log n)\) time?

// ! find the maximum value
// let a:number = 40
// let b:number = 25
// let c:number = 35

// function maximum(a:number,b:number,c:number):number{
//         if(a<b && b>c){
//             return b
//         }
//         else if(a<=c && c>=b){
//             return c
//         }
//         return a
// }

// console.log(maximum(a,b,c))

// #####################################################################################################

//! Question 2: Even or Odd
// Easy

// !Given a number n, determine whether it is even or odd.

// Example:
// Input: 15
// Output: Odd

// Input: 24
// Output: Even

function evenOdd(num:number):string{
    return num%2==0? "Even" :"Odd"; 
}
let num:number=10;
console.log(evenOdd(num));