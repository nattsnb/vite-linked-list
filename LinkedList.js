import { LinkedListElement } from "./LinkedListElement.js";

export class LinkedList {
  #head = null;
  #tail = null;

  addToTail(value) {
    let newMember = null;
    console.log("adding " + value);
    if (this.#head === null) {
      this.#head = new LinkedListElement(value, null, null);
      this.#tail = this.#head;
    } else if (this.#head.nextMember === null) {
      newMember = new LinkedListElement(value, null, this.#head);
      this.#head.nextMember = newMember;
    } else {
      newMember = new LinkedListElement(value, null, this.#tail);
      this.#tail.nextMember = newMember;
    }
    this.#tail = newMember;
  }

  toArray() {
    let currentMember = this.#head;
    const array = [];
    while (currentMember !== null) {
      array.push(currentMember);
      currentMember = currentMember.nextMember;
    }
    return array;
  }

  remove(elementNumber) {
    const elementToRemove = this.getNthElement(elementNumber);
    elementToRemove.nextMember.previousMember = elementToRemove.previousMember;
    elementToRemove.previousMember.nextMember = elementToRemove.nextMember;
  }

  reverse = () => {
    if (this.#tail && this.#head !== this.#tail) {
      let reversedList = new LinkedList();
      let currentMember = this.#tail;
      while (currentMember !== null) {
        reversedList.addToTail(currentMember.value);
        currentMember = currentMember.previousMember;
      }
      return reversedList;
    }
  };
  switchPositions(leftElement, rightElement) {
    if (this.#head !== this.#tail) {
      const rightElement = rightElement;
      const leftElement = leftElement;
      if (rightElement - leftElement === 1) {
        rightElement.nextMember.previousMember = leftElement;
        leftElement.previousMember.nextMember = rightElement;
        rightElement.previousMember = leftElement.previousMember;
        leftElement.nextMember = rightElement.nextMember;
        leftElement.previousMember = rightElement;
        rightElement.nextMember = leftElement;
      } else {
        rightElement.nextMember.previousMember = leftElement;
        rightElement.previousMember.nextMember = leftElement;
        leftElement.nextMember.previousMember = rightElement;
        leftElement.previousMember.nextMember = rightElement;
        const rightElementPreviousMemberSaved = rightElement.previousMember;
        const leftElementNextMemberSaved = leftElement.nextMember;
        rightElement.previousMember = leftElement.previousMember;
        leftElement.nextMember = rightElement.nextMember;
        leftElement.previousMember = rightElementPreviousMemberSaved;
        rightElement.nextMember = leftElementNextMemberSaved;
      }
    }
  }
  addBetween(previousElement, nextElement, value) {
    if (this.#head !== this.#tail && previousElement.nextMember === nextElement) {
      const previousElement = previousElement;
      const nextElement = nextElement;
      const newMember = new LinkedListElement(
        value,
        nextElement,
        previousElement,
      );
      newMember.value = value;
      previousElement.nextMember = newMember;
      nextElement.previousMember = newMember;
    }
  }
  getNthElement=(number)=> {
    if (number <= this.getLengthOfList()){
      let member = this.#head;
      for (let i = 0; i < number- 1; i++) {
        member = member.nextMember;
      }
      return member;
    } else {
      return "number is too high"
    }
  }
  getLengthOfList(){
    let count = 0
    if (this.#head){
      count = count + 1
      let member = this.#head
      while (member.nextMember !== null) {
          count = count + 1
          member = member.nextMember
      }
    }
    return count
  }
}
