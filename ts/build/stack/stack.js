"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StackListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class StackList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    append(value) {
        var listNode = new StackListNode(value);
        if (this.head) {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = listNode;
        }
        else {
            this.head = listNode;
        }
        this.size += 1;
        return listNode;
    }
    removeLast() {
        if (this.head) {
            var current = this.head, previous = null;
            if (this.size === 1) {
                this.head = null;
                return current;
            }
            else {
                while (current.next) {
                    previous = current;
                    current = current.next;
                }
                previous.next = null;
                return current.value;
            }
        }
        else
            return null;
    }
    printElems() {
        var result = "______________", current = this.head;
        while (current) {
            result += "\n" + current.value;
            current = current.next;
        }
        console.log(result);
        return result;
    }
    checkHead() {
        return this.head === null;
    }
    getHead() {
        return this.head.value;
    }
    getSize() {
        return this.size;
    }
}
class Stack {
    constructor() {
        this.items = new StackList();
    }
    push(value) {
        return this.items.append(value);
    }
    pop() {
        return this.items.removeLast();
    }
    size() {
        return this.items.getSize();
    }
    isEmpty() {
        return this.items.checkHead();
    }
    peek() {
        return this.items.getHead();
    }
    printStack() {
        return this.items.printElems();
    }
}
exports.default = Stack;
//# sourceMappingURL=stack.js.map