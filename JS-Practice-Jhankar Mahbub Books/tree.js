 class Node {
    constructor(value){
       this.value = value;
       this.left = undefined;
       this.right = undefined;
    }
 }
 class BinarySearchTree{
    constructor(value){
        this.root = new Node(value);
    }
 
    add(newNode){
        this.newNode = newNode;
       var root = this.root;
       if(newNode.value < root.value){
           root.left = newNode;
       }
       else{
           root.right = newNode;
       }
     }
 }
 var root = this.root;

 var root = new Node(40);
 var treeTeam = new BinarySearchTree(root);

 var firstNode = new Node(25);
 treeTeam.add(firstNode);

 var secondNode = new Node(78)
 treeTeam.add(secondNode);