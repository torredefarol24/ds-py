"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const queue_1 = __importDefault(require("../queue/queue"));
console.log("\nQueue");
var q = new queue_1.default();
q.enqueue("Drink Coffee");
q.enqueue("Eat Lunch");
q.enqueue("Shower");
q.enqueue("Walk");
q.enqueue("go to Bed");
q.printElems();
q.dequeue();
q.printElems();
//# sourceMappingURL=queueDemo.js.map