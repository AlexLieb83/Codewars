// Create a Queue class

class Queue {
  // implement your Queue constructor here
  constructor() {
    this.list = [];
  }
}

Queue.prototype.enqueue = function (item) {
  // add item to the queue
  this.list.push(item);
};

Queue.prototype.dequeue = function () {
  // remove item from the front of the queue and return its value
  return this.list.shift();
};

Queue.prototype.size = function () {
  // return number of items in queue so far
  return this.list.length;
};
