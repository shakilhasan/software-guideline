// Definition for singly-linked list.
export class LinkListNode {
    val: any
    index: number
    next: LinkListNode | null

    constructor({val = 0, index = -1, next = null}: {
        val?: any, index?: number, next?: LinkListNode | null
    }) {
        this.val = val;
        this.index = index;
        this.next = next;
    }

}

export class LinkList {
    head: LinkListNode | null;
    length: number;

    constructor() {
        this.head = null;
        this.length = 0;
    }

    push(val: any) {
        let node = new LinkListNode({val});
        if (this.head === null) this.head = node;
        else {
            let current: LinkListNode | undefined = this.head;
            while (current) {
                if (current.next === null) {
                    current.next = node;
                    break;
                }
                current = current.next;
            }
        }
        this.length++;
    }

    pop() {
        if (this.head?.next === null) {
            this.head = null;
            return;
        }
        let current: LinkListNode | null = this.head;
        while (current) {
            if (current.next?.next === null) {
                current.next = null;
                this.length--;
                break;
            }
            current = current.next;
        }
        return;
    }

    toString() {
        let current: LinkListNode | null = this.head;
        let result = '';
        while (current) {
            result += current.val + '>';
            current = current.next;
        }
        return result;
    }

    join(val: any) {
        let current: LinkListNode | null = this.head;
        this.length += this.length - 1;
        while (current) {
            if (current.next) {
                current.next = new LinkListNode({val, next: current.next})
                current = current.next.next;
            } else break;
        }
    }

    shift() {
        this.length -= 1;
        if (this.head?.next) this.head = this.head?.next
    }

    unshift(val: any) {
        this.length += 1;
        this.head = new LinkListNode({val, next: this.head});
    }

    concat(node: LinkListNode | null) {
        let current = this.head;
        this.length += this.count(node);
        while (current) {
            if (current.next === null) {
                current.next = node;
                break;
            }
            current = current.next;
        }
    }

    count(node: LinkListNode | null) {
        let current = node, i = 0;
        while (current) {
            i++;
            current = current.next;
        }
        return i;
    }

    insertAt(val: any, index: number) {
        let current = this.head, i = 0;
        if (index === 0) {
            this.head = new LinkListNode({val, next: this.head})
            return;
        }
        while (current) {
            if ((index - 1) === i++) {
                current.next = new LinkListNode({val, next: current.next})
            }
            current = current.next;
        }
    }

    removeFrom(index: number) {
        let current = this.head, i = 0, pre;
        while (current) {
            if ((index - 1) === i++) {
                pre = current.next;
            }
            pre = current;
            current = current.next;
        }
    }

    removeElement(val: any) {
        let current = this.head;
        if (this.head && this.head.val === val) {
            this.head = this.head.next;
            return;
        }
        while (current?.next) {
            if (current.next.val === val) current.next = current.next.next;
            current = current.next;
        }
    }

    isEmpty() {
        return this.head === null;
    }

    includes(val: any) {
        let current = this.head;
        while (current) {
            if (current.val === val) return true
            current = current.next;
        }
        return false;
    }

    reverse() {
        let current = this.head, pre = null;
        while (current) {
            pre = new LinkListNode({val: current.val, next: pre})
            if (current.next === null) {
                this.head = pre;
            }
            current = current.next;
        }
    }

    findIndex(val: any) {
        let current = this.head, i = 0;
        while (current) {
            if (current.val === val) return i;
            current = current.next;
            i++;
        }
        return -1;
    }

    findLastIndex(val: any) {
        let current = this.head, i = 0, lastIndex = -1;
        while (current) {
            if (current.val === val) lastIndex = i;
            current = current.next;
            i++;
        }
        return lastIndex;
    }

    clear() {
        this.head = null;
    }
}

const list = new LinkList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push("last");
// list.pop();
// list.join(10);
// list.shift()
list.unshift(0);
// list.concat(new LinkListNode({val: 10}));
// list.insertAt('newInserted', 0);
// list.removeFrom(0);
// list.removeElement(0);
// list.reverse();
console.log(list.toString());
// console.log(list.findLastIndex(3));
// console.log(list.findIndex(3));
// console.log(list.isEmpty());
// console.log(list.includes(1));
// console.log(list.length);

