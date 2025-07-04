// Q.1 WAP to implements Create singly Linked list, adding a new Elements, and Delete node from singly linked list (Without any pre-defined function)

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    delete(value) {
        if (!this.head) {
            console.log("List is empty.");
            return;
        }

        if (this.head.data === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        let previous = null;

        while (current !== null && current.data !== value) {
            previous = current;
            current = current.next;
        }

        if (current === null) {
            console.log("Value not found in the list.");
            return;
        }

        previous.next = current.next;
    }

    display() {
        let current = this.head;
        let result = "";
        while (current !== null) {
            result += current.data + " -> ";
            current = current.next;
        }
        result += "null";
        console.log(result);
    }
}

const list = new SinglyLinkedList();

list.add(10);
list.add(20);
list.add(30);
list.display();  // Output: 10 -> 20 -> 30 -> null

list.delete(20);
list.display();  // Output: 10 -> 30 -> null

list.delete(10);
list.display();  // Output: 30 -> null

list.delete(30);
list.display();  // Output: null

list.delete(40); // Output: List is empty.

// Q.2 WAP to implements Selection Sort using JavaScript DSA without any pre-defined function.

function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

let arr = [64, 25, 12, 22, 11];
console.log("Original Array:", arr);  // Output : Original Array: (5) [64, 25, 12, 22, 11]

let sortedArr = selectionSort(arr);
console.log("Sorted Array:", sortedArr);  // Output : Sorted Array: (5) [11, 12, 22, 25, 64]

// Q.3 WAP to implements Stack using JavaScript without any functions?

class Stack {
    constructor() {
        this.items = {};
        this.top = -1;
    }

    push(element) {
        this.top++;
        this.items[this.top] = element;
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack Underflow");
            return null;
        }
        const popped = this.items[this.top];
        delete this.items[this.top];
        this.top--;
        return popped;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.top];
    }

    isEmpty() {
        return this.top === -1;
    }

    display() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return;
        }
        let result = "";
        for (let i = 0; i <= this.top; i++) {
            result += this.items[i] + " ";
        }
        console.log("Stack:", result);
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.display();  // Output: Stack: 10 20 30

console.log("Top element:", stack.peek()); // Output: Top element: 30

stack.pop();
stack.display();  // Output: Stack: 10 20

stack.pop();
stack.pop();
stack.pop();      // Output: Stack Underflow

// Q.4 WAP to implement binary Search using JavaScript with DSA?

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}

let array = [5, 10, 15, 20, 25, 30, 35];
let target = 25;

let result = binarySearch(array, target);

if (result !== -1) {
    console.log("Element found at index:", result);
} else {
    console.log("Element not found in the array.");
}

// Output : Element found at index: 4

// Q.5 WAP to implement Merge sort using JavaScript without any function?

function mergeSort(Arr) {
    if (Arr.length <= 1) {
        return Arr;
    }

    let mid = 0;
    let len = Arr.length;
    for (let i = 0; i < len / 2; i++) {
        mid = i;
    }

    let left = [];
    let right = [];
    for (let i = 0; i <= mid; i++) {
        left[left.length] = Arr[i];
    }
    for (let i = mid + 1; i < Arr.length; i++) {
        right[right.length] = Arr[i];
    }

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result[k] = left[i];
            i++;
        } else {
            result[k] = right[j];
            j++;
        }
        k++;
    }

    while (i < left.length) {
        result[k] = left[i];
        i++;
        k++;
    }

    while (j < right.length) {
        result[k] = right[j];
        j++;
        k++;
    }

    return result;
}

let Arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Original Array:", Arr); // Output : Original Array: [38, 27, 43, 3, 9, 82, 10]
let sortedArray = mergeSort(Arr);
console.log("Sorted Array:", sortedArray); // Output : Sorted Array:  [3, 9, 10, 27, 38, 43, 82]