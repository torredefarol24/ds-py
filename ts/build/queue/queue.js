"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QueueListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class QueueList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    append(value) {
        var listElem = new QueueListNode(value);
        if (this.head) {
            var current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = listElem;
        }
        else {
            this.head = listElem;
        }
        this.length += 1;
        return;
    }
    removeHead() {
        if (this.head) {
            var currHead = this.head;
            this.head = this.head.next;
            this.length -= 1;
            return currHead;
        }
        else
            return null;
    }
    checkEmpty() {
        return this.head === null;
    }
    getHead() {
        if (this.head)
            return this.head.value;
        else
            return null;
    }
    printItems() {
        if (this.head) {
            var result = "", current = this.head;
            while (current) {
                result += current.value + ", ";
                current = current.next;
            }
            console.log("----------\n", result);
            return result;
        }
        else {
            console.log("No Items");
            return null;
        }
    }
    getLength() {
        return this.length;
    }
}
class Queue {
    constructor() {
        this.items = new QueueList();
    }
    enqueue(value) {
        this.items.append(value);
    }
    dequeue() {
        var removedHead = this.items.removeHead();
        return removedHead ? removedHead.value : null;
    }
    isEmpty() {
        return this.items.checkEmpty();
    }
    peek() {
        return this.items.getHead();
    }
    printElems() {
        return this.items.printItems();
    }
    getSize() {
        return this.items.getLength();
    }
}
exports.default = Queue;
//# sourceMappingURL=queue.js.map