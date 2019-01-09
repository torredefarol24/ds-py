import Queue from '../queue/queue'
console.log("\nQueue")

var q = new Queue()

q.enqueue("Drink Coffee")
q.enqueue("Eat Lunch")
q.enqueue("Shower")
q.enqueue("Walk")
q.enqueue("go to Bed")

q.printElems()

q.dequeue()
q.printElems()