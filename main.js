import "./style.css";
import { LinkedList } from "./LinkedList.js";

console.log("script is working");

const list = new LinkedList();
list.addToTail(12);
list.addToTail(5);
list.addToTail(67);
list.addToTail(78);
list.addToTail(99);
list.addBetween(list.toArray()[1], list.toArray()[2], 45)
console.log(list.toArray())
