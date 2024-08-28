import "./style.css";
import { LinkedList } from "./LinkedList.js";

console.log("script is working");

const list = new LinkedList();
list.addToTail(12);
list.addToTail(5);
list.addToTail(67);
list.addToTail(78);
list.addToTail(99);
list.addToTail(34);
list.addToTail(9);

console.log(list.toArray());
list.remove(6);
console.log("REMOVE last");
console.log(list.toArray());
list.reverse();
console.log("REVERSE");
console.log(list.toArray());
list.switchPositions(list.toArray()[0], list.toArray()[2]);
console.log("SWITCH 1st and 3rd");
console.log(list.toArray());
list.addBetween(list.toArray()[0], list.toArray()[1], 60);
console.log("ADD 60 between 1st and 2nd");
console.log(list.toArray());
list.switchPositions(list.toArray()[1], list.toArray()[5]);
console.log("SWITCH 3rd and 6th");
console.log(list.toArray());
list.remove("pierwszy");
console.log("REMOVE 'pierwszy'");
console.log(list.toArray());
list.switchPositions(list.toArray()[0], list.toArray()[6]);
console.log("SWITCH 1st and last");
console.log(list.toArray());
list.remove(1);
console.log("REMOVE 1st");
console.log(list.toArray());
list.addBetween(list.toArray()[1], list.toArray()[3], 71);
console.log("ADD between 2nd and 4th");
console.log(list.toArray());
list.reverse();
console.log("REVERSE");
console.log(list.toArray());

// TESTING REMOVE FUNCTION
// list.remove(1)
// console.log(list.toArray())
// list.remove(2)
// console.log(list.toArray())
// list.remove(3)
// console.log(list.toArray())
// list.remove(7)
// console.log(list.toArray())
// list.remove("nanana")
// console.log(list.toArray())

// TESTING REVERSE FUNCTION
// console.log(list.toArray())
// list.reverse()
// console.log(list.toArray())
//
// TESTING SWITCH POSITIONS FUNCTION
// list.switchPositions(list.toArray()[0],list.toArray()[2])
// console.log(list.toArray())
// console.log(list.toArray().length)
// list.switchPositions(list.toArray()[1],list.toArray()[2])
// console.log(list.toArray())
// list.switchPositions(list.toArray()[3],list.toArray()[4])
// console.log(list.toArray())
// list.switchPositions(list.toArray()[3],list.toArray()[9])
// console.log(list.toArray())

// TESTING ADD BETWEEN FUNCTION
// list.addBetween(list.toArray()[0],list.toArray()[2],68)
// console.log(list.toArray())
// list.addBetween(list.toArray()[0],list.toArray()[1],60)
// console.log(list.toArray())
// list.addBetween(list.toArray()[1],list.toArray()[2],71)
// console.log(list.toArray())
// list.addBetween(list.toArray()[5],list.toArray()[6],68)
// console.log(list.toArray())
// list.addBetween(list.toArray()[7],list.toArray()[8],666)
// console.log(list.toArray())
