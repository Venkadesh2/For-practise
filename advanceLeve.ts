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

// function evenOdd(num:number):string{
//     return num%2==0? "Even" :"Odd"; 
// }
// let num:number=10;
// console.log(evenOdd(num));

// # #####################################################################################################

//! 13/11/26 Today's two coding challenges
// Question 1 – Second-largest distinct element

// Given an array of integers, find the second-largest distinct element without sorting the array.
// let nums: number[] = [12, 35, 1, 10, 34, 35];

// Expected output: 34 

// let nums: number[] = [12, 35, 1, 10, 34, 35];

// function secondLargest(num:number[]):number{

//     let firstLargest:number=num[0];
//     let secondL:number=0;
//     num.forEach((n)=>{
//         if (n>firstLargest){
//             secondL=firstLargest;
//             firstLargest=n;
//         }
//         else if(secondL<n && n<firstLargest){
//             secondL=n
//         }
//     })

//     return secondL
// }
// console.log(secondLargest(nums))


// # #####################################################################################################

//! Question 2 – Move all zeros to the end

// Move all zeros to the end of an array while maintaining the order of non-zero elements.
// let nums: number[] = [0, 1, 0, 3, 12];

// Expected output: [1, 3, 12, 0, 0]


// function zero (num:number[]):number[]{
//     let position:number=0;
//     num.forEach((i,index)=>{
//         if(i !==0){
//             num[position]=i;
//             position ++;
//         }
//     })
//     while(position<num.length){
//         num[position]=0;
//         position++;
//     }
//     return num
// }

// console.log(zero(nums))


// #  # #####################################################################################################

//! day --3 14/11/26

// 1. What is the Two-Pointer Technique?
// Two pointers means using two variables to track two different positions in an array.

// Usually:
// - left starts at the beginning.
// - right starts at the end.
// - We move one or both pointers depending on the problem.

//! 2. Worked example: Reverse an array
// Input:
// [10, 20, 30, 40, 50]


// Expected output:
// [50, 40, 30, 20, 10]

let num :number[]=[10,30,40,50,60];

function twoPointer(num:number[]):number[]{
    let left :number=0
    let right:number=num.length-1;
    while(left<right){
        let temp:number=num[left];
        num[left]=num[right];
        num[right]=temp;
        left++;
        right--;
    }
    return num
}
console.log(twoPointer(num))
