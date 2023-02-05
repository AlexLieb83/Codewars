// Create a Queue class - how would we make the dequeue faster, knowing that .shift() is not O(1)

class Queue {
  // implement your Queue constructor here
  constructor() {
    this.list = [];
  }

  enqueue(item) {
    // add item to the queue
    this.list.push(item);
  }

  dequeue() {
    // remove item from the front of the queue and return its value
    return this.list.shift();
  }

  size() {
    // return number of items in queue
    return this.list.length;
  }
}
