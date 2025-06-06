// 1. Write a program for Reverse Link List

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class SinglyLinkList {
//     constructor() {
//         this.head = null;
//     }

//     appendData(value) {
//         let temp = new Node(value);
//         if (this.head == null) {
//             this.head = temp;
//             return;
//         }
//         let current = this.head;
//         while (current.next !== null) {
//             current = current.next;
//         }
//         current.next = temp;
//     }

//     Display() {
//         if (this.head === null) {
//             console.log("This List is empty...");
//             return;
//         }
//         let result = [];
//         let current = this.head;
//         while (current !== null) {
//             result.push(current.data);
//             current = current.next;
//         }
//         console.log(result.join(" -> "));
//     }

//     ReverseData() {
//         let current = this.head;
//         let prev = null, next = null;

//         while (current !== null) {
//             next = current.next;
//             current.next = prev;
//             prev = current;
//             current = next;
//         }
//         this.head = prev;
//     }
// }

// let obj1 = new SinglyLinkList();
// obj1.appendData(50);
// obj1.appendData(100);
// obj1.appendData(150);
// obj1.appendData(200);
// obj1.appendData(250);

// console.log("Original List:");
// obj1.Display();
// obj1.ReverseData();
// console.log("Reversed List:");
// obj1.Display();

/*
Expected Output:
Original List:
50 -> 100 -> 150 -> 200 -> 250
Reversed List:
250 -> 200 -> 150 -> 100 -> 50
*/

// 2. Write a Program for Given Link List is Palindrome or not

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class SinglyLinkedList {
//     constructor() {
//         this.head = null;
//     }

//     appendData(val) {
//         const temp = new Node(val);
//         if (this.head == null) {
//             this.head = temp;
//             return;
//         }
//         let current = this.head;
//         while (current.next != null) {
//             current = current.next;
//         }
//         current.next = temp;
//     }

//     isPalindrome() {
//         let values = [];
//         let current = this.head;

//         while (current != null) {
//             values.push(current.data);
//             current = current.next;
//         }

//         let start = 0;
//         let end = values.length - 1;
//         while (start < end) {
//             if (values[start] !== values[end]) {
//                 return false;
//             }
//             start++;
//             end--;
//         }
//         return true;
//     }

//     display() {
//         if (this.head == null) {
//             console.log("The linked list is empty.");
//             return;
//         }
//         let result = [];
//         let current = this.head;
//         while (current != null) {
//             result.push(current.data);
//             current = current.next;
//         }
//         console.log("Linked List:", result.join(" -> "));
//     }
// }

// let linkedList = new SinglyLinkedList();
// linkedList.appendData(07);
// linkedList.appendData(16);
// linkedList.appendData(29);
// linkedList.appendData(11);
// linkedList.appendData(29);
// linkedList.appendData(16);
// linkedList.appendData(07);

// linkedList.display();
// console.log("Is Palindrome:", linkedList.isPalindrome());

/*
Expected Output:
Linked List: 07 -> 16 -> 29 -> -> 11 -> 29 -> 16 -> 07
Is Palindrome: true
*/

// 3. Write a Program for circular Link List (insert, delete and display function)

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class CircularLinkedList {
//     constructor() {
//         this.head = null;
//     }

//     // Insert at the end
//     insert(value) {
//         const newNode = new Node(value);
//         if (!this.head) {
//             this.head = newNode;
//             newNode.next = this.head; // Point to itself
//             return;
//         }

//         let current = this.head;
//         while (current.next !== this.head) {
//             current = current.next;
//         }

//         current.next = newNode;
//         newNode.next = this.head;
//     }

//     // Get length of circular list
//     getLength() {
//         if (!this.head) return 0;

//         let count = 1;
//         let current = this.head.next;
//         while (current !== this.head) {
//             count++;
//             current = current.next;
//         }
//         return count;
//     }

//     // Delete node at specific position
//     deleteAtPosition(pos) {
//         if (!this.head) {
//             console.log("List is empty.");
//             return;
//         }

//         const length = this.getLength();
//         if (pos <= 0 || pos > length) {
//             console.log("Invalid position. Must be between 1 and " + length);
//             return;
//         }

//         // Deleting the head node
//         if (pos === 1) {
//             if (this.head.next === this.head) {
//                 // Only one node
//                 this.head = null;
//                 return;
//             }

//             let last = this.head;
//             while (last.next !== this.head) {
//                 last = last.next;
//             }

//             this.head = this.head.next;
//             last.next = this.head;
//             return;
//         }

//         // Deleting non-head node
//         let current = this.head;
//         let prev = null;
//         let count = 1;

//         while (count < pos) {
//             prev = current;
//             current = current.next;
//             count++;
//         }

//         prev.next = current.next;
//     }

//     // Display the list
//     display() {
//         if (!this.head) {
//             console.log("List is empty.");
//             return;
//         }

//         let result = [];
//         let current = this.head;
//         do {
//             result.push(current.data);
//             current = current.next;
//         } while (current !== this.head);

//         console.log(result.join(" -> ") + " -> (back to head)");
//     }
// }

// // Testing the Circular Linked List
// let cll = new CircularLinkedList();

// cll.insert(10);
// cll.insert(20);
// cll.insert(30);
// cll.insert(40);
// cll.insert(50);
// cll.insert(60);
// cll.insert(70);
// cll.insert(80);

// console.log("Original Circular List:");
// cll.display();

// cll.deleteAtPosition(8);  // Last
// cll.deleteAtPosition(3);  // Middle
// cll.deleteAtPosition(1);  // Head

// console.log("Updated Circular List:");
// cll.display();

/*
Expected Output:
Original Circular List:
10 -> 20 -> 30 -> 40 -> 50 -> 60 -> 70 -> 80 -> (back to head)
Updated Circular List:
20 -> 40 -> 50 -> 60 -> 70 -> (back to head)
*/