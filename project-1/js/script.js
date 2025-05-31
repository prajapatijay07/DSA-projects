//1.  Write a JavaScript Function to Descending Order data converting using Bubble sort.

let BubbleData = [91, 24, 53, 11, 8, 67, 42, 30, 76, 19];

function bubbleSortDescending(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSortDescending(BubbleData));

// Expected Output: (10) [91, 76, 67, 53, 42, 30, 24, 19, 11, 8]

// 2. Write a JavaScript Function to Ascending Order data converting using Merge sort.

function mergeSortAscending(array) {
    if (array.length <= 1) {
        return array;
    }

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    return merge(mergeSortAscending(left), mergeSortAscending(right));
}

function merge(left, right) {
    let sortedArray = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }

    return sortedArray.concat(left.slice(i)).concat(right.slice(j));
}

const array = [55, 12, 94, 3, 21, 78, 41];
const sortedArray = mergeSortAscending(array);
console.log("Sorted Array:", sortedArray);

// Expected Output: (7) [3, 12, 21, 41, 55, 78, 94]

// 3. Write a JavaScript Program 2-D array print and also print its's square of every element.

let Matrix = [
    [3, 5, 7],
    [9, 11, 13],
    [15, 17, 19]
];

function squareMatrix(matrix) {
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        let row = [];
        for (let j = 0; j < matrix[i].length; j++) {
            row.push(matrix[i][j] * matrix[i][j]);
        }
        result.push(row);
    }
    return result;
}

let squaredMatrix = squareMatrix(Matrix);
console.log("Original Matrix:", Matrix);
console.log("Square Matrix:", squaredMatrix);

// Expected Output:
// [
//    [9, 25, 49],
//   [81, 121, 169],
//   [225, 289, 361]
// ]