var btNode = require("./btNode.js");

var BST = function() {
  this.root = null;
}

BST.prototype.insert = function(val) {
  if(this.root == null) {
    this.root = new btNode(val);
  } else {
    var current = this.root;

    while(current) {
      if(val < current.value) {
        if(current.left) {
          current = current.left;
        } else {
          current.left = new btNode(val);
          break;
        }
      } else {
        if(current.right) {
          current = current.right;
        } else {
          current.right = new btNode(val);
          break;
        }
      }
    }
  }
}

BST.prototype.inOrder = function(node) {
  if (node !== null) {
    this.inOrder(node.left);
    console.log(node.value);
    this.inOrder(node.right);
  }
}

myBST = new BST();
myBST.insert(23);
myBST.insert(45);
myBST.insert(16);
myBST.insert(37);
myBST.insert(3);
myBST.insert(99);
myBST.insert(22);

myBST.inOrder(myBST.root);