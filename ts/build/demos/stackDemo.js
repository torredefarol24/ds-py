"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stack_1 = __importDefault(require("../stack/stack"));
console.log("Stack");
var s = new stack_1.default();
s.push("Great Works of Charles Dickens");
s.push("The Secret Gargen");
s.push("Sales's Lot");
s.push("The ABC Murders");
s.printStack();
console.log("Popping Stack :", s.pop());
s.printStack();
console.log("Peeking Stack :", s.peek());
console.log("Stack Empty ? :", s.isEmpty());
//# sourceMappingURL=stackDemo.js.map