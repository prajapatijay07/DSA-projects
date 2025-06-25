// 1. Write a program for Stack Operation Program (Insert, Delete, isEmpty, Length) 

class DynamicStack {
    constructor() {
        this.stackArray = [];
    }

    push(element) {
        this.stackArray.push(element);
        console.log(`${element} pushed into stack`);
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack Underflow! No elements to pop.");
            return null;
        }
        return this.stackArray.pop();
    }

    isEmpty() {
        return this.stackArray.length === 0;
    }

    length() {
        return this.stackArray.length;
    }

    printStack() {
        console.log("Stack:", this.stackArray.join(" -> "));
    }
}

const myStack = new DynamicStack();

myStack.push(10);
myStack.push(80);
myStack.push(50);
myStack.printStack();
console.log("Popped Element:", myStack.pop());
myStack.printStack();
console.log("Is Stack Empty?", myStack.isEmpty());
console.log("Stack Length:", myStack.length());

// Expected Output:-
// 10 pushed into stack
// 80 pushed into stack
// 50 pushed into stack
// Stack: 10 -> 80 -> 50
// Popped Element: 50
// Stack: 10 -> 80
// Is Stack Empty? false
// Stack Length: 2

// 2. Write a program for Next Greater Element using Stack.

function findNextGreaterElements(nums) {
    let stack = [];
    let result = new Array(nums.length).fill(-1);

    for (let i = nums.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= nums[i]) {
            stack.pop();
        }

        if (stack.length > 0) {
            result[i] = stack[stack.length - 1];
        }

        stack.push(nums[i]);
    }

    return result;
}

const inputArray = [5, 3, 10, 2, 6, 12, 1];
console.log("Next Greater Elements:", findNextGreaterElements(inputArray));

// Expected Output: Next Greater Elements: [10, 10, 12, 6, 12, -1, -1]

// 3. Write a program for a reverse string using Stack. 

function reverseStringUsingStack(inputString) {
    let stack = [];
    let reversed = "";

    for (let char of inputString) {
        stack.push(char);
    }

    while (stack.length > 0) {
        reversed += stack.pop();
    }

    return reversed;
}

const originalString = "JavaScript is Awesome!";
console.log("Original String:", originalString);
console.log("Reversed String:", reverseStringUsingStack(originalString));

// Expected Output: Original String: JavaScript is Awesome!
// Reversed String: !emosewA si tpircSavaJ