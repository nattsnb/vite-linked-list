import {LinkedListElement} from "./LinkedListElement.js";

export class LinkedList {
    #head = null;
    #tail = null;

    addToTail(value) {
        let newMember = null;
        console.log('adding ' + value);
        if(this.#head === null) {
            this.#head = new LinkedListElement(value, null, null);
            this.#tail = this.#head;
        } else if(this.#head.nextMember === null) {
            newMember = new LinkedListElement(value, null, this.#head);
            this.#head.nextMember = newMember;
        } else {
            newMember = new LinkedListElement(value, null, this.#tail)
            this.#tail.nextMember = newMember;
        }
        this.#tail = newMember;
    }

    toArray() {
        let currentMember = this.#head
        const array = [];
        while(currentMember !== null) {
            array.push(currentMember);
            currentMember = currentMember.nextMember;
        }
        return array;
    }

    remove() {
        if( this.#tail !== null) {
            const newTail = this.#tail.previousMember
            newTail.nextMember = null
            this.#tail = newTail
        }
    }
    reverse() {}
    switchPositions(leftElement, rightElement) {}
    addBetween(previousElement, nextElement) {}
}

