
// // singly linkedList
// class Node{
//     constructor(value){
//         this.value = value;
//         this.next;
//     }
// }
// class LinkedList{
//     constructor(head){
//         this.head = head;
//     }
//     add(newNode){
//         var currentNode = this.head;
//         while(currentNode.next != undefined){
//             currentNode = currentNode.next;
//         }
//         currentNode.next = newNode;
//     }
// }

// var head  = new Node("amader");
// var manobBondhon = new LinkedList(head);

// var pant = new Node("pant");
// manobBondhon.add(pant);

// var dhila = new Node("dhila");
// manobBondhon.add(dhila);

// var keno = new Node("keno");
// manobBondhon.add(keno);

// var kortipokkho = new Node("kortipokkho");
// manobBondhon.add(kortipokkho);

// var jabab = new Node("jabab");
// manobBondhon.add(jabab);

// var chai = new Node("chai");
// manobBondhon.add(chai);

// console.log(manobBondhon);


// // doubly linkedList

 class Node{
     constructor(value){
         this.value = value;
         this.next;
         this.previous;
     }
 }

 class DoublyLinkedList{
	constructor(head){
		this.head = head;
	}
	add(newNode){
		var head = this.head,
		current = head,
		previous = head;
		while(current.next != undefined){
				previous = current;
				current = current.next;
		 }
		current.next = newNode;
		current.previous = previous;
	}
}

 var head = new Node("amader");

 var double = new DoublyLinkedList(head);

 var pant = new Node("pant");
 double.add(pant);

 var pant = new Node("pant");
	double.add(pant);

 var dhila = new Node("dhila");
 double.add(dhila);

 var keno = new Node("keno");
 double.add(keno);

 var kotripokkho = new Node("kotripokkho");
 double.add(kotripokkho);

 var jobab = new Node("jobab");
 double.add(jobab);

 var chai = new Node("chai");
 double.add(chai);

 console.log(double);

