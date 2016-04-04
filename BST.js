var btNode = require("./btNode.js");

var BST = function() {
  this.root = null;
}

BST.prototype.insert = function(value) {
  var newNode = new btNode(value);
  if(this.root == null) {
    this.root = newNode
  } else {
    var current = this.root;
    while(current) {
      if(value < current.value) {
        if(current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          return;
        }
      } else {
        if(current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          return;
        }
      }
    }
  }
}

BST.prototype.min = function() {
  if(this.root == null) {
    return "List is empty";
  } else {
    var current = this.root
    while(current.left) {
      current = current.left
    }
    return current;
  }
}

BST.prototype.max = function() {
  if(this.root == null) {
    return "List is empty";
  } else {
    var current = this.root
    while(current.right) {
      current = current.right
    }
    return current;
  }
}

BST.prototype.inOrder = function(node) {
  if (node !== null) {
    this.inOrder(node.left);
    console.log(node.value);
    this.inOrder(node.right);
  }
}

BST.prototype.size = function() {
  if(this.root == null) {
    return 0;
  }
  return _size(this.root);
}

function _size(root) {
  var count = 1;
  if(root.left == null && root.right == null) {
    return count;
  } else {
    return count + _size(root.left) + _size(root.right);
  }
}


myBST = new BST();
myBST.insert(8);
myBST.insert(3);
myBST.insert(10);
myBST.insert(1);
myBST.insert(6);
myBST.insert(4);
myBST.insert(7);
myBST.insert(14);
myBST.insert(13);

var c = myBST.size();
console.log(c);