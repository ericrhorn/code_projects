// Singly Linked List 

// Create a Node class that consists of two properties, element, which stores the nodes data, and next which stores a link to the next node. 

// new Node syntax like this 
// node = new Node('hello');

// create a constructor (special function that creates and initializes an object instance of a class) function for node. Pass in an element and set THIS element as the element that got passed in and THIS.next is set to null

//buildong a node
function Node(element){
    this.element = element;
    this.next = null;
}


// create a SinglyLinkedList class that consists of one property: head. This property is a node to represent the head of the list which can be created with a new Node (head)
// when a new list is created it will automatically populate the head property with a new node with the element value of head.

// create new constructor funciton for the SinglyLinkedList. THIS.head. when the funciton is callled it will set head with the new node with the element value of head. 


//building a linked list
function SinglyLinkedList(){
    this.head = new Node('head');
}


// the first funciton we will add to the SinglyLinkedList's protptype is the insert funciton which is a node into a list.  to insert a new node you have to specify which node you want to insert the node after. to do this we create a helper function, find, which searches through the linked list looking for the specified data. when this data is found the function return the node storing the data

// helper funciton 
// function will take in the element or value you want to find
SinglyLinkedList.prototype.find = function(element){
    //first set current node = to head
    var currentNode = this.head;

    // what the function is going to do is 
    // while some condition is true
        // do something
    while (currentNode.element !== element){
        currentNode = currentNode.next;
    }
    // return currentNode at the end 
    return currentNode
}


// once the "after" node is found the new node is inserted into the linked list. First the new nodes property is set to teh calue of teh next property of the 'after' node. then the "after" nodes next property is set to the reference to teh new node. think about why this sequence is important. now create teh insert funciton utilizong the find helper function


// create insert function that uses find funciton to insert a node into the singly linked list
SinglyLinkedList.prototype.insert = function (newElement, element){
    // instantiate new node using the new element 
    var newNode = new Node(newElement);
    // state the curent 
    var current = this.find(element)
    // do something
    newNode.next = current.next;
    current.next = newNode;

}

SinglyLinkedList.prototype.display = function(){
    // set current node to this.head (current node is the start)
    var currentNode = this.head;
    // while some condition
    while(currentNode.next !== null){
        // do something
        console.log(currentNode.next.element);
        currentNode = currentNode.next;
    }
}
var cities = new SinglyLinkedList();
cities.insert("Los Angeles", "head");
cities.insert("San Francisco", "Los Angeles");
cities.insert("Seattle", "San Francisco");
cities.display();


// In order to remove a node from a linked list we need to find the node that is just before the node we want to remove. Once we find that node we can change its next property to no longer reference the removed node, and the previous node is modified to point to the node after the removed node.
// we can define a function, findPrevious(), to perform this task. this function will traverse the linked list, stop at each node to see if the next node stores the data that is to be removed. when the data is found, the function returnes this node (the previous node), so that its next property cna be modified.


SinglyLinkedList.prototype.findPrevious = function(element){
    // start at the begining 
    var currentNode = this.head;
    // while some conditions are true
    while(currentNode.next !== null && currentNode.next.element !== element){
        // do sometihng 
        currentNode = currentNode.next;
    }
    return currentNode;

}

// Now using the findPrevious helper function that we wrote, implement a remove function that takes in the value of the node that you want to delete, and deletes it from the linked list.


SinglyLinkedList.prototype.remove = function(element) {
    var previousNode = this.findPrevious(element);
    // if something
    // if (!previousNode || !previousNode.next){
        // do something
        // return
        if(previousNode.next !== null){
            previousNode.next = previousNode.next.next
    }
    // previousNode.next = previousNode.next.next;
    // return this.head
    }
    var basketballTeams = new SinglyLinkedList();
    basketballTeams.insert("Lakers", "head");
    basketballTeams.insert("Blazers", "Lakers");
    basketballTeams.insert("Celtics", "Blazers");
    basketballTeams.insert("Kings", "Celtics");
    basketballTeams.display();
    console.log("Removing Celtics");
    basketballTeams.remove("Celtics");
    basketballTeams.display();



// SLL methods Add Front. Write a method that accepts a value and creates a new node, assign it to the list head and return a pointer to the new head node

// function Node(element){
//     this.element = element;
//     this.next = null;
// }

// changes element to Val

function Node(val){
    this.val = val;
    this.next = null;
}

// from previous lesson
// function SLL(){
//     this.head = new Node('head');
// }

// new lessons changes this.head to null
function SLL(){ // will start with no nodes
    this.head = null; // Head points to first node
}

SLL.prototype.addFront = function (val) {
    // Creating a new node object with the value provided
    let new_node = new Node(val);
    // Checking to see if the current list does not have a head node (if the list is empty)
    // If the list is empty, place the new node as the head 
    if(!this.head) {
        this.head = new_node;
        return this;
    }
    // If the list is not empty, assign the head to be the next node to the new node (Blue Arrow in picture above)
    new_node.next = this.head;
    // Then finally assign the new_node to be the new head of the list (Red Arrow in picture above)
    this.head = new_node;
    return this.head; // or you can say return this and it will return the whole object
}
var mySll = new SLL();
mySll.addFront(10)
mySll.addFront(5)
mySll.addFront(3)
console.log(mySll)
console.log(mySll.head.next)


// the above code with class constructors 

// defines the nodes we are using for the class
class SLLNode { // singly linked list node class
    constructor(val){ 
        this.value = val; // holds value for this node
        this.next = null; // pointer to next null 
    }
}

class SLL { // this SLL class itself
    constructor(){ // will start with no nodes
        this.head = null; // head points to first node in the list 
    }

// when defining methods for SLL class or any class you do not need the keyword function. All methods builtion to class go here
    addFront(val){
    // Creating a new node object with the value provided
    let new_node = new SLLNode(val);
    // Checking to see if the current list does not have a head node (if the list is empty)
    // If the list is empty, place the new node as the head 
    if(!this.head) {
        this.head = new_node;
        return this;
    }
    // If the list is not empty, assign the head to be the next node to the new node (Blue Arrow in picture above)
    new_node.next = this.head;
    // Then finally assign the new_node to be the new head of the list (Red Arrow in picture above)
    this.head = new_node;
    return this.head; // or you can say return this and it will return the whole object
    }

    // remove a node from the front of the list
    removeFront(){
        let removeNode = this.head; // hava a var hold hte node well remove

        // if (!this.head){
        //     return null;
        // }
        // or same as above
        if (this.head == null){
            return this.head;
        }
        this.head = removeNode.next; // moves the head of the list to the 2nd node, which will become the new head when we are done
        removeNode.next = null; // first node now points to null instead of the list
        return this.head; // returnes the new list without the onld head node
    }

    // write a method to return the value(not the node) at the head of the list. if the list is empty return null

    front(){
        if (this.head == null){
            return null;
        }
        else {
            return this.head.value
        }
        // ternary operator instead of above if else statement - condition ? value if true : value if false
        // return this.head ? this.head.value : null;
        // return this.head == null ? null : this.head.value;
    }
}
var mySll = new SLL();
mySll.addFront(10)
console.log(mySll.front())
mySll.addFront(5)
mySll.addFront(3)
console.log(mySll)
mySll.removeFront()
console.log(mySll)
console.log(mySll.head.next)


// iterating through a lkinked list 

class SllNode {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Sll {
    constructor(){
        this.head = null;
    }
    // declare a variable called runner which does the same as x in a for loop - goes from iteration to iteration. Since we dont know how many nodes are in our list a for loop will not work. A for loop only works when we know how many iterations we want to go before starting the loop. So we will be using the while loop. We check the end of the list by checking if the node is null (last node always points to null) 

    addFront(val){
        let new_node = new SllNode(val);
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this.head;
        }

    // front(){
    //     if (this.head == null){
    //         return null;
    //     }
    //     else {
    //         return this.head.value
    //     }
    //     // ternary operator instead of above if else statement - condition ? value if true : value if false
    //     // return this.head ? this.head.value : null;
    //     // return this.head == null ? null : this.head.value;
    // }    

    findSum(){
        // tell runner to start at the begining of the list 
        let runner = this.head;
        let sum = 0;
        // use a while loop since we dont know the length and declare null as the end of the list.
        while (runner !== null){
            // since the runner is set to the current node its value will be equal to the value of the node they are currently on
            sum += runner.value;
            // tell to move to the next car
            runner = runner.next;
        }
        return sum;
        
    }
}
var newSll = new Sll();
newSll.addFront(5)
newSll.addFront(4)
newSll.addFront(3)
newSll.addFront(2)
newSll.addFront(1)
console.log(newSll.findSum())
// console.log(newSll.front())
// console.log(newSll)
// console.log(newSll.head.next)
// var newSum = newSll.findSum()
// console.log(newSum)


// find sum without comments 


class SllNode {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}
class Sll {
    constructor(){
        this.head = null;
    }
    addFront(val){
        let new_node = new SllNode(val);
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this.head;
        }
    findSum(){
        let runner = this.head;
        let sum = 0;
        while (runner !== null){
            sum += runner.value;
            runner = runner.next;
        }
        return sum;
        
    }
}
var newSll = new Sll();
newSll.addFront(5)
newSll.addFront(4)
newSll.addFront(3)
newSll.addFront(2)
newSll.addFront(1)
console.log(newSll.findSum())



// coppied from platform

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
    findSum() {
        //We first have to tell our train attendant that we want them to start at the front of the train
        let runner=this.head
        let sum=0
        //Since a Linked List does not know how many nodes is within it, we will not be able to use a for loop to             iterate, instead we'll use a while
        //Also we need to tell them when to stop otherwise they will just run off the end of the train
        while(runner !== null){
            //Since the runner is set to the current node, its value will be equal to the value of the node they                 are currently on
            sum+=runner.data
            //Tell our attendant to move to the next car
            runner=runner.next
        }
        return `sum: ${sum}`;
    }
}
var newSll = new LinkedList();
console.log(newSll)
console.log(newSll.findSum())


// SLL contains 

class SllNode {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Sll {
    constructor(){
        this.head = null;
    }
    add(val){
        let new_node = new SllNode(val);
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this.head;
        }
    contains(val){
        var runner = this.head;
        while (runner !== null){
            if (runner.value === val){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
}
var newList = new Sll();
newList.add(1)
newList.add(2)
newList.add(3)
newList.add(4)
newList.add(5)
console.log(newList.contains(6))
console.log(newList.contains(5))



// length 

class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}
class Sll {
    constructor(){
        this.head = null;
    }
    add(val){
        let new_node = new Sll(val);
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this.head;
        }
    length(){
        var runner = this.head;
        var nodeLength = 0;
        while (runner){
            nodeLength++;
            runner = runner.next;
        }
        return nodeLength;
    }
}
var newList = new Sll();
newList.add(1)
newList.add(2)
newList.add(3)
newList.add(4)
newList.add(5)
console.log(newList.length())


// display

class SLLNode {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}
class SLL {
    constructor(){
        this.head = null;
    }
    addFront(value){
        var newNode = new SLLNode(value);
        if(!this.head) {
            this.head = newNode;
            return this;
        }
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
        }
    display(){
        var listSrtring = "";
        if(this.head == null){
            return "this list is empty"
        }
        listSrtring += this.head.value;
        var runner = this.head.next;
        while(runner){
            listSrtring += ", " + runner.value;
            runner = runner.next;
        }
        return listSrtring;
    }

}
var mySLL = new SLL();
mySLL.addFront(10)
mySLL.addFront(5)
mySLL.addFront(3)
console.log(mySLL)
console.log(mySLL.head.next)
// console.log(newSll.findSum())
console.log(mySLL.display())


class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}
class SllNode {
    constructor(){
        this.head = null;
    }
    add(value){
        let new_node = new SllNode(value);
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this.head;
        }
    // display(){
    //     var listSrtring = "";
    //     if(this.head == null){
    //         return "this list is empty"
    //     }
    //     listSrtring += this.head.value;
    //     var runner = this.head.next;
    //     while(runner != null){
    //         listSrtring += ", " + runner.value;
    //         runner = runner.next;
    //     }
    //     return listSrtring;
    // }
}
var newList = new SllNode();
// console.log(newList.display())
newList.add(1)
newList.add(2)
newList.add(3)
newList.add(4)
newList.add(5)
console.log(newList)
// console.log(newList.display())


class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}
class Sll {
    constructor(){
        this.head = null;
    }
    add(val){
        let new_node = new Sll(val);
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this.head;
        }
    // length(){
    //     var runner = this.head;
    //     var nodeLength = 0;
    //     while (runner){
    //         nodeLength++;
    //         runner = runner.next;
    //     }
    //     return nodeLength;
    // }
    // display(){
    //     var listSrtring = "";
    //     if(this.head == null){
    //         return "this list is empty"
    //     }
    //     listSrtring += this.head.val;
    //     var runner = this.head.next;
    //     while(runner){
    //         listSrtring += ", " + runner.val;
    //         runner = runner.next;
    //     }
    //     return listSrtring;
    // }
}
var newList = new Sll();
// console.log(newList.display())
newList.add(1)
newList.add(2)
newList.add(3)
newList.add(4)
newList.add(5)
console.log(newList)
// console.log(newList.length())
console.log(newList.display())




// min/max/average

class SllNode {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Sll {
    constructor(){
        this.head = null;
    }
    addFront(val){
        let new_node = new SllNode(val);
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this.head;
        }
        
    length(){
        var runner = this.head;
        var nodeLength = 0;
        while (runner){
            nodeLength ++;
            runner = runner.next
        }
        return nodeLength;
    }
    maxMinAvg() {
        let sum = 0;
        let max = this.head.value;
        let min = this.head.value;
        let runner = this.head;
        while(runner) {
            sum += runner.value;
            if(runner.value > max) {
                max = runner.value;
            }
            else if(runner.value < min) {
                min = runner.value;
            }
            runner = runner.next
        }
        return `sum: ${sum} max: ${max} min: ${min} avg: ${sum/this.length()}`;
    }
}
var newSll = new Sll();
newSll.addFront(5)
newSll.addFront(4)
newSll.addFront(3)
newSll.addFront(2)
newSll.addFront(1)
console.log(newSll)
console.log(newSll.maxMinAvg())


// back/remove/add

class SllNode {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}
class Sll {
    constructor(){
        this.head = null;
    }
    addFront(val){
        let new_node = new SllNode(val);
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this.head;
        }
    display(){
        var listSrtring = "";
        if(this.head == null){
            return "this list is empty"
        }
        listSrtring += this.head.value;
        var runner = this.head.next;
        while(runner){
            listSrtring += ", " + runner.value;
            runner = runner.next;
        }
        return listSrtring;
    }
    lastValue(){
        var runner = this.head;
        while(runner.next){
            runner = runner.next;
        }
        return `last value: ${runner.value}`;
    }
    removeLast(){
        var runner = this.head;
        while (runner.next.next){
            runner = runner.next;
        }
        runner.next = null;
        return this
    }
    addLast(value){
        var runner = this.head;
        while(runner.next){
            runner = runner.next;
        }
        runner.next = new SllNode(value);
        return this        
    }
    
}
var newSll = new Sll();
newSll.addFront(5)
newSll.addFront(4)
newSll.addFront(3)
newSll.addFront(2)
newSll.addFront(1)
console.log(newSll.display())
console.log(newSll.lastValue())
newSll.removeLast()
console.log(newSll.display())
newSll.addLast(5)
console.log(newSll.display())


// move



class SllNode {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}
class Sll {
    constructor(){
        this.head = null;
    }
    addFront(val){
        let new_node = new SllNode(val);
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this.head;
        }
    display(){
        var listSrtring = "";
        if(this.head == null){
            return "this list is empty"
        }
        listSrtring += this.head.value;
        var runner = this.head.next;
        while(runner){
            listSrtring += ", " + runner.value;
            runner = runner.next;
        }
        return listSrtring;
    }
    moveToFront(){
        var runner = this.head;
        var min = this.head.value;
        while(runner){
            if (runner.value < min){
                min = runner.value;
            }
            runner = runner.next;
        }
  
        
        this.head.value = min;

        return `Min: ${min}`
    }
    moveToBack(){
        var runner = this.head;
        var max = this.head.value
        // var last = this.null;
        while (runner){
            if (runner.value > max){
                max = runner.value;
            }
            runner = runner.next;
        }
        return `Max: ${max}`
    }
    
}
var newSll = new Sll();
newSll.addFront(2)
newSll.addFront(4)
newSll.addFront(1)
newSll.addFront(5)
newSll.addFront(3)
console.log(newSll.display())
console.log(newSll.moveToFront())
console.log(newSll.moveToBack())
console.log(newSll.display())





