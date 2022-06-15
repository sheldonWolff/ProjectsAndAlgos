class Node {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    addFront(val) {
        let new_node = new Node(val);
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return console.log(this);
    }

    display() {
    	// neatly display nodes in my list
        let runner1=this.head.next
        let runner = this.head
        let myList = ""
        if(runner == null){
            return myList;
        }
        myList+=runner.data
        while(runner1 !== null){
            myList += "," + runner1.data
            runner1=runner1.next
        }
        return myList;
    }
}

SLL1 = new LinkedList()
SLL1.addFront(76)
SLL1.addFront(2)
console.log(SLL1.display())
SLL1.addFront(11.41) 
console.log(SLL1.display())