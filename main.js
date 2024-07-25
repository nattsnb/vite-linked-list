import "./style.css";
import { LinkedList } from "./LinkedList.js";

console.log("script is working");

const list = new LinkedList();
list.addToTail(12);
list.addToTail(5);
list.addToTail(67);
list.addToTail(78);
list.addToTail(99);

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
