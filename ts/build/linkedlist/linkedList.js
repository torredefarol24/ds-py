"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LinkedListNode {
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
    add(node) {
        var new_node = new LinkedListNode(node);
        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }
        else {
            var current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = new_node;
            this.tail = new_node;
            this.tail.next = null;
        }
        this.length += 1;
    }
    printList() {
        var current = this.head, str = "";
        while (current != null) {
            str += current.value + "->";
            current = current.next;
        }
        console.log(str);
    }
    getHead() {
        return this.head ? this.head.value : null;
    }
    getTail() {
        return this.tail ? this.tail.value : null;
    }
    prepend(node) {
        var nodeToAdd = new LinkedListNode(node);
        if (this.head) {
            var tempHead = this.head;
            this.head = nodeToAdd;
            this.head.next = tempHead;
        }
        else {
            this.head = nodeToAdd;
            this.tail = nodeToAdd;
        }
        this.length += 1;
    }
    exists(node) {
        if (this.head) {
            if (this.head.value == node)
                return true;
            var current = this.head;
            while (current != null) {
                if (current.value == node)
                    return true;
                current = current.next;
            }
            return false;
        }
        else
            return false;
    }
    delete(node) {
        if (this.head) {
            if (this.head.value == node) {
                this.length -= 1;
                this.head = null;
                this.tail = null;
                return true;
            }
            var current = this.head;
            var previous = null;
            while (current != null) {
                if (current.value == node)
                    break;
                previous = current;
                current = current.next;
            }
            if (current) {
                previous.next = current.next;
                this.length -= 1;
                return true;
            }
            else
                return undefined;
        }
        else
            return undefined;
    }
    reverseList() {
        if (this.head) {
            var current = this.head, previous = null, nextNode = null;
            while (current != null) {
                nextNode = current.next;
                current.next = previous;
                previous = current;
                current = nextNode;
            }
            this.tail = this.head;
            this.head = previous;
            return true;
        }
        else
            return undefined;
    }
}
exports.default = LinkedList;
//# sourceMappingURL=linkedList.js.map