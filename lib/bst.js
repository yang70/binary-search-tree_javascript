var Bst = function(value, root){
  this.root = root || false;
  this.left = null;
  this.right = null;
  this.val = value || null;

  if(root){
    this.left = new Bst;
    this.right = new Bst;
  }
};

Bst.prototype.insert = function(value){
  var newBst = new Bst(value);
  newBst.left = new Bst;
  newBst.right = new Bst;

  var previous = null;
  var current = this;
  var direction = false;

  while(current.val && (current.val != newBst.val)){
    previous = current;

    if(newBst.val < current.val){
      current = current.left;
      direction = false;
    }else{
      current = current.right;
      direction = true;
    }
  }

  if(current.val == newBst.val){
    return;
  }else if(direction){
    previous.right = newBst;
  }else{
    previous.left = newBst;
  }
};

Bst.prototype.contains = function(value){
  var current = this;

  while(current.val && (current.val != value)){
    if(value < current.val){
      current = current.left;
    }else{
      current = current.right;
    }
  }

  if(current.val){
    return true;
  }else{
    return false;
  }
};

Bst.prototype.size = function(){
  var countLeft;
  var countRight;

  this.left.val ? (countLeft = this.left.size()) : (countLeft = 0);
  this.right.val ? (countRight = this.right.size()) : (countRight = 0);

  return (countLeft + countRight + 1);
};

var myTree = new Bst(4, true);

module.exports = Bst;

// myTree.insert(5);
// myTree.insert(2);
// myTree.insert(3);
// myTree.insert(1);
// myTree.insert(1);
// myTree.insert(6);

// console.log(myTree.contains(5));
// console.log(myTree.contains(2));
// console.log(myTree.contains(1));
// console.log(myTree.contains(6));

// var size = myTree.size()

// console.log(size);

// console.log(myTree);
