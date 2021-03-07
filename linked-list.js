class LinkedListNode{
    constructor(data, next = null){
        this.data = data,
        this.next = next
    }
}

class LinkedList{
    constructor(head = null){
        this.head = head;
    }
}

let node1 = new LinkedListNode(2)
let node2 = new LinkedListNode(7)
node1.next = node2

const numList = new LinkedList(node1) 

console.log(numList.head.next.data)