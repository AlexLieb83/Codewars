// Create a Queue class - how would we make the dequeue faster, knowing that .shift() is not O(1)

class Queue {
  // implement your Queue constructor here
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    // add item to the queue
    this.storage[this.tail] = item;
    this.tail;
  }

  dequeue() {
    // remove item from the front of the queue and return its value
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head;
    return removed;
  }

  size() {
    // return number of items in queue
    return this.list.length;
  }
}
