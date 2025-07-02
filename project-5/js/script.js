// 1. Write a program for Simple Queue.
class SimpleQueue {
    constructor(capacity) {
        this.capacity = capacity;
        this.queue = new Array(capacity);
        this.front = 0;
        this.rear = -1;
        this.count = 0;
    }

    isFull() {
        return this.count === this.capacity;
    }

    isEmpty() {
        return this.count === 0;
    }

    enqueue(value) {
        if (this.isFull()) {
            console.log("Queue is full. Cannot enqueue.");
            return;
        }

        this.rear++;
        this.queue[this.rear] = value;
        this.count++;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty. Cannot dequeue.");
            return null;
        }

        const removed = this.queue[this.front];
        this.front++;
        this.count--;
        return removed;
    }

    peek() {
        if (this.isEmpty()) {
            return "Queue is empty.";
        }
        return this.queue[this.front];
    }

    size() {
        return this.count;
    }

    display() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return;
        }

        const result = this.queue.slice(this.front, this.rear + 1);
        console.log("Queue:", result.join(" -> "));
    }
}

const q = new SimpleQueue(5);

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);
q.display();  // Output: Queue: 10 -> 20 -> 30 -> 40 -> 50

console.log("Dequeued:", q.dequeue());  // Output: Dequeued: 10
q.enqueue(60); 

q.display();  // Output: Queue: 20 -> 30 -> 40 -> 50 -> 60

console.log("Front Element:", q.peek());  // Output: Front Element: 20
console.log("Current Size:", q.size());   // Output: Current Size: 5

// 2. write a program Queue using two stacks.

class DualStackQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(element) {
        this.stack1.push(element);
    }

    dequeue() {
        if (this.stack1.length === 0 && this.stack2.length === 0) {
            console.log("Queue is empty! Cannot dequeue.");
            return null;
        }

        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2.pop();
    }

    front() {
        if (this.stack1.length === 0 && this.stack2.length === 0) {
            return "Queue is empty!";
        }

        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2[this.stack2.length - 1];
    }

    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

    size() {
        return this.stack1.length + this.stack2.length;
    }

    display() {
        const output = [...this.stack2.slice().reverse(), ...this.stack1];
        console.log("Queue:", output.join(" -> "));
    }
}

const queue = new DualStackQueue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
queue.enqueue(70);

queue.display();  // Output: Queue: 10 -> 20 -> 30 -> 40 -> 50 -> 60 -> 70
console.log("Front Element:", queue.front());       // Output: 10
console.log("Dequeued:", queue.dequeue());          // Output: 10
console.log("New Front Element:", queue.front());   // Output: 20
console.log("Queue Size:", queue.size());           // Output: 6
console.log("Is Queue Empty?", queue.isEmpty());    // Output: false
queue.display();  // Output: Queue: 20 -> 30 -> 40 -> 50 -> 60 -> 70

// 3. write a program check first string swap can make strings equal. (leetcode question no 1790)

function isOneSwapEqual(str1, str2) {
    if (str1 === str2) return true;

    let mismatchIndices = [];

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            mismatchIndices.push(i);
            if (mismatchIndices.length > 2) return false;
        }
    }

    return (
        mismatchIndices.length === 2 &&
        str1[mismatchIndices[0]] === str2[mismatchIndices[1]] &&
        str1[mismatchIndices[1]] === str2[mismatchIndices[0]]
    );
}

console.log(isOneSwapEqual("bank", "kanb"));      // true (swap 'b' and 'k')
console.log(isOneSwapEqual("attack", "defend"));  // false (more than 2 mismatches)
console.log(isOneSwapEqual("abcd", "abcd"));      // true (already equal)
console.log(isOneSwapEqual("abcd", "abdc"));      // true (swap 'c' and 'd')
console.log(isOneSwapEqual("aa", "bb"));          // false (characters completely different)