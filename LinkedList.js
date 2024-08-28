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
    let array = [];
    while (currentMember !== null) {
      array.push(currentMember);
      currentMember = currentMember.nextMember;
    }
    return array;
  }

  remove(elementNumber) {
    if (!isNaN(elementNumber) && elementNumber <= this.getLengthOfList()) {
      const elementToRemove = this.getNthElement(elementNumber);
      if (elementToRemove.nextMember) {
        elementToRemove.nextMember.previousMember =
          elementToRemove.previousMember;
      } else {
        this.#tail = elementToRemove.previousMember;
      }
      if (elementToRemove.previousMember) {
        elementToRemove.previousMember.nextMember = elementToRemove.nextMember;
      } else {
        this.#head = elementToRemove.nextMember;
      }
    }
  }

  reverse = () => {
    if (this.#tail && this.#head !== this.#tail) {
      let previous = null;
      const originalHead = this.#head;
      while (this.#head !== null) {
        let next = this.#head.nextMember;
        this.#head.nextMember = previous;
        this.#head.previousMember = next;
        previous = this.#head;
        this.#head = next;
      }
      this.#tail = originalHead;
      this.#head = previous;
    }
  };
  switchPositions(leftElement, rightElement) {
    if (this.#head !== this.#tail && leftElement && rightElement) {
      if (leftElement === this.#head && rightElement === this.#tail) {
        const savedRightElementPreviousMember = rightElement.previousMember;
        rightElement.previousMember = null;
        rightElement.nextMember = leftElement.nextMember;
        rightElement.nextMember.previousMember = rightElement;
        leftElement.nextMember = null;
        leftElement.previousMember = savedRightElementPreviousMember;
        leftElement.previousMember.nextMember = leftElement;
        this.#head = rightElement;
        this.#tail = leftElement;
      } else if (
        leftElement === this.#head &&
        leftElement.nextMember === rightElement
      ) {
        leftElement.nextMember = rightElement.nextMember;
        rightElement.nextMember.previousMember = leftElement;
        leftElement.previousMember = rightElement;
        rightElement.previousMember = null;
        rightElement.nextMember = leftElement;
        this.#head = rightElement;
      } else if (leftElement === this.#head) {
        const savedLeftElementNextMember = leftElement.nextMember;
        leftElement.nextMember = rightElement.nextMember;
        leftElement.nextMember.previousMember = rightElement;
        leftElement.previousMember = rightElement.previousMember;
        leftElement.previousMember.nextMember = leftElement;
        rightElement.previousMember = null;
        rightElement.nextMember = savedLeftElementNextMember;
        this.#head = rightElement;
      } else if (
        rightElement === this.#tail &&
        leftElement.nextMember === rightElement
      ) {
        leftElement.previousMember.nextMember = rightElement;
        rightElement.nextMember = leftElement;
        rightElement.previousMember = leftElement.previousMember;
        leftElement.previousMember = rightElement;
        leftElement.nextMember = null;
        this.#tail = leftElement;
      } else if (rightElement === this.#tail) {
        const savedRightElementPreviousMember = rightElement.previousMember;
        rightElement.previousMember = leftElement.previousMember;
        leftElement.previousMember.nextMember = rightElement;
        rightElement.nextMember = leftElement.nextMember;
        leftElement.nextMember.previousMember = rightElement;
        leftElement.nextMember = null;
        leftElement.previousMember = savedRightElementPreviousMember;
        savedRightElementPreviousMember.nextMember = leftElement;
      } else if (leftElement.nextMember === rightElement) {
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
    if (
      this.#head !== this.#tail &&
      previousElement.nextMember === nextElement
    ) {
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
  getNthElement = (number) => {
    if (number <= this.getLengthOfList()) {
      let member = this.#head;
      for (let i = 0; i < number - 1; i++) {
        member = member.nextMember;
      }
      return member;
    } else {
      return "number is too high";
    }
  };
  getLengthOfList() {
    let count = 0;
    if (this.#head) {
      count = count + 1;
      let member = this.#head;
      while (member.nextMember !== null) {
        count = count + 1;
        member = member.nextMember;
      }
    }
    return count;
  }
}
