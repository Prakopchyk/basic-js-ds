const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add a new node to the end of the linked list
  append(value) {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // Remove the first node from the linked list
  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedNode = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length--;
    return deletedNode;
  }

  enumerate() {
    if (this.head === null) {
      return {};
    }

    var node = this.head;
    var root = { value: node.value, next: null }
    var obj = root;

    while (node.next !== null) {
      obj.next = { value: node.next.value, next: null }
      node = node.next;
      obj = obj.next;
    }
    return root;
  }
}

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  getUnderlyingList() {
    return this.linkedList.enumerate();
  }

  enqueue(value) {
    this.linkedList.append(value);
  }

  dequeue() {
    return this.linkedList.deleteHead().value
  }
}

module.exports = {
  Queue
};
