// Create a Doubly Linked List Class

class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }
  // add to end of list / tail
  append(val) {
    //if list is empty
    if (!this.tail) {
      this.head = this.tail = new Node(val);
    } else {
      let oldTail = this.tail;
      this.tail = new Node(val);
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }
  }

  // addto beginning of list / head
  prepend(val) {
    //if list is empty
    if (!this.head) {
      this.head = this.tail = new Node(val);
    } else {
      let oldHead = this.head;
      this.head = new Node(val);
      oldHead.prev = this.head;
      this.head.next = oldHead;
    }
  }

  deleteHead() {
    //if list is empty
    if (!this.head) {
      return null;
    } else {
      let removedHead = this.head;
      //if 1 node left in list
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      return removedHead.val;
    }
  }

  deleteTail() {
    // if list is empty
    if (!this.tail) {
      return null;
    } else {
      let removedTail = this.tail;
      // if 1 node left in list
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      return removedTail.val;
    }
  }

  search(val) {
    let currNode = this.head;

    while (currNode) {
      if (currNode.val === val) {
        return currNode;
      }
      currNode = currNode.next;
    }

    return null;
  }
}

class Node {
  constructor(val, prev, next) {
    this.val = val;
    this.prev = prev || null;
    this.next = next || null;
  }
}

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);

list.prepend(0);
list.prepend(-1);

list.search(1);
list.search(3);
list.search(999);

list.deleteHead();
list.deleteTail();
