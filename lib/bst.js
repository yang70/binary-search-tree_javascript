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

Bst.prototype.depth = function(){
  var depthLeft;
  var depthRight;

  this.left.val ? (depthLeft = this.left.depth()) : (depthLeft = 0);
  this.right.val ? (depthRight = this.right.depth()) : (depthRight = 0);

  if(depthLeft > depthRight){
    return (depthLeft + 1);
  }else{
    return (depthRight + 1);
  }
};

Bst.prototype.toString = function(){
  var stringLeft;
  var stringRight;

  this.left.val ? (stringLeft = this.left.toString()) : (stringLeft = '');
  this.right.val ? (stringRight = this.right.toString()) : (stringRight = '');

  return (stringLeft + ' ' + this.val.toString() + ' ' + stringRight);
};

Bst.prototype.balance = function(){
  var depthLeft;
  var depthRight;

  this.left.val ? (depthLeft = this.left.depth()) : (depthLeft = 0);
  this.right.val ? (depthRight = this.right.depth()) : (depthRight = 0);

  return (depthLeft - depthRight);
};

Bst.prototype.in_order = function(){
  var valLeft;
  var valRight;

  this.left.val ? (valLeft = this.left.in_order()) : (valLeft = []);
  this.right.val ? (valRight = this.right.in_order()) : (valRight = []);

  return (valLeft.concat(this.val)).concat(valRight);
};

Bst.prototype.pre_order = function(){
  var valLeft;
  var valRight;

  this.left.val ? (valLeft = this.left.pre_order()) : (valLeft = []);
  this.right.val ? (valRight = this.right.pre_order()) : (valRight = []);

  return [this.val].concat(valLeft).concat(valRight);
};

Bst.prototype.post_order = function(){
  var valLeft;
  var valRight;

  this.left.val ? (valLeft = this.left.post_order()) : (valLeft = []);
  this.right.val ? (valRight = this.right.post_order()) : (valRight = []);

  return valLeft.concat(valRight).concat(this.val);
};

Bst.prototype.breadth_first = function(){
  var queue = [this];
  var results = [];

  for(i = 0; i < queue.length; i++){
    results.push(queue[i].val);
    if(queue[i].left.val){
      queue.push(queue[i].left);
    }
    if(queue[i].right.val){
      queue.push(queue[i].right)
    }
  }

  return results;
};

module.exports = Bst;
