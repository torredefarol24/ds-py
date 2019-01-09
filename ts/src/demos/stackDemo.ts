import Stack from '../stack/stack'

console.log("Stack")

var s = new Stack()

s.push("Great Works of Charles Dickens")
s.push("The Secret Gargen")
s.push("Sales's Lot")
s.push("The ABC Murders")

s.printStack()

console.log("Popping Stack :", s.pop())
s.printStack()

console.log("Peeking Stack :", s.peek())
console.log("Stack Empty ? :", s.isEmpty())