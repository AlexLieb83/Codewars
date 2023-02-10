// Create a Queue class - FIFO

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
    this.tail++;
  }

  dequeue() {
    // remove item from the front of the queue and return its value
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  }
}

const queue = new Queue();

queue.enqueue("apple");
queue.enqueue("banana");
queue.enqueue("blueberry");

queue.dequeue("apple");

queue.enqueue("strawberry");
queue.enqueue("pear");
