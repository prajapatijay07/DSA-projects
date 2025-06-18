// 1. Write a program to implement binary search to find the index of a target element in a sorted array. 

// let binaryArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130];
// let target = 100;

// function searchElement(arr, element) {
//     let start = 0;
//     let end = arr.length - 1;
//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);
//         if (arr[mid] === element) {
//             return mid;
//         } else if (arr[mid] < element) {
//             start = mid + 1;
//         } else {
//             end = mid - 1;
//         }
//     }
//     return -1;
// }

// let result = searchElement(binaryArray, target);
// if (result !== -1) {
//     console.log(`Element is found at index ${result}`);
// } else {
//     console.log('Element is not found...');
// }

// Expected Outpur:- Element is found at index 9

// 2. write a program to find the first and last occurrence of a target element using the lower and upper bound methods. also return the count of occurrences.

// function lowerBound(arr, target) {
//     let left = 0, right = arr.length;

//     while (left < right) {
//         let mid = Math.floor((left + right) / 2);
//         if (arr[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid;
//         }
//     }
//     return left;
// }

// function upperBound(arr, target) {
//     let left = 0, right = arr.length;

//     while (left < right) {
//         let mid = Math.floor((left + right) / 2);
//         if (arr[mid] <= target) {
//             left = mid + 1;
//         } else {
//             right = mid;
//         }
//     }
//     return left;
// }

// function findFirstLastCount(arr, target) {
//     let first = lowerBound(arr, target);
//     let last = upperBound(arr, target) - 1; 

//     if (first < arr.length && arr[first] === target) {
//         let count = last - first + 1;
//         return {
//             firstOccurrence: first,
//             lastOccurrence: last,
//             count: count
//         };
//     } else {
//         return {
//             firstOccurrence: -1,
//             lastOccurrence: -1,
//             count: 0
//         };
//     }
// }

// const arr = [3, 3, 3, 5, 7, 9, 9, 9, 11];
// const target = 9;
// const result = findFirstLastCount(arr, target);

// console.log(`First Occurrence: ${result.firstOccurrence}`);
// console.log(`Last Occurrence: ${result.lastOccurrence}`);
// console.log(`Count: ${result.count}`);

// Expected Output :- 
// First Occurrence: 5
// Last Occurrence: 7
// Count: 3

// 3. Write a program to find the pivot index where the rotation occurs in a rotated sorted array.


// let shiftedArray = [22, 25, 28, 30, 35, 1, 3, 5, 10, 15, 18, 20];

// function findRotationPoint(arr) {
//     let left = 0;
//     let right = arr.length - 1;
    
//     while (left < right) {
//         let mid = Math.floor((left + right) / 2);
        
//         if (arr[mid] > arr[right]) {
//             left = mid + 1; 
//         } else {
//             right = mid; 
//         }
//     }
    
//     return left;
// }

// let rotationPoint = findRotationPoint(shiftedArray);

// console.log(`Input Array: ${shiftedArray}`);
// console.log(`Rotation Point Index: ${rotationPoint}`);
// console.log(`Rotation Point Element: ${shiftedArray[rotationPoint]}`);

//  Expected Output:- 
// Input Array: 22,25,28,30,35,1,3,5,10,15,18,20
// Rotation Point Index: 5
// Rotation Point Element: 1