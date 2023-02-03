// Create a Queue class

class Queue {
  // implement your Queue constructor here
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }
}

Queue.prototype.enqueue = function (item) {
  // add item to the queue
  this.items[this.tail] = item;
  this.tail++;
};

Queue.prototype.dequeue = function () {
  // remove item from the front of the queue and return its value
  const item = this.items[this.head];
  delete this.items[this.head];
  this.head++;
  return item;
};

Queue.prototype.size = function () {
  // return number of items in queue so far
  return this.tail;
};
