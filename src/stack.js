const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

class Stack {

  arr1 = [];

  push(el) {
    this.arr1.push(el);
  }

  pop() {
    return this.arr1.pop();
  }

  peek() {
    return this.arr1[this.arr1.length - 1];
  }
}

module.exports = {
  Stack
};
