var btNode = require("./btNode.js");

var BST = function() {
  this.root = null;
}

BST.prototype.add = function(val) {
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


bst = new BST();

bst.add(10);
bst.add(15);
bst.add(7);

console.log(bst.root);