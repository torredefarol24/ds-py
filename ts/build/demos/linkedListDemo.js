"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const linkedList_1 = __importDefault(require("../linkedlist/linkedList"));
console.log("\nLinked List");
var ll1 = new linkedList_1.default();
ll1.add(5);
ll1.add(8);
ll1.add(2);
ll1.prepend(3);
ll1.add(14);
ll1.printList();
console.log("4 is in list", ll1.exists(4));
console.log("delete 8 from list ", ll1.delete(8));
console.log("current List");
ll1.printList();
console.log("Reverse List");
ll1.reverseList();
ll1.printList();
//# sourceMappingURL=linkedListDemo.js.map