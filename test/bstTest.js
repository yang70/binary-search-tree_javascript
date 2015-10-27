var expect = require('chai').expect;
var Bst = require('../lib/bst');

var compareArrays = function(array1, array2){
  if(array1.length != array2.length){
    return false;
  }else{
    for(i = 0; i < array1.length; i++){
      if(array1[i] != array2[i]){
        return false;
      }
    }
    return true;
  }
}

describe("create a new binary search tree and test it's methods", function(){
  it("should create a tree with a value and null left/right nodes", function(){
    var testBst = new Bst(5, true);
    expect(testBst.left.val).to.equal(null);
    expect(testBst.right.val).to.equal(null);
    expect(testBst.val).to.equal(5);
  })

  it("should insert correctly", function(){
    var testBst2 = new Bst(4, true);
    testBst2.insert(5);
    testBst2.insert(2);
    testBst2.insert(3);
    testBst2.insert(1);
    expect(testBst2.toString()).to.equal(" 1  2  3  4  5 ");
  })

  it("should return true/false if the tree contains a value", function(){
    var testBst3 = new Bst(4, true);
    testBst3.insert(5);
    testBst3.insert(2);
    testBst3.insert(3);
    testBst3.insert(1);
    expect(testBst3.contains(5)).to.equal(true);
    expect(testBst3.contains(2)).to.equal(true);
    expect(testBst3.contains(3)).to.equal(true);
    expect(testBst3.contains(1)).to.equal(true);
    expect(testBst3.contains(6)).to.equal(false);
    expect(testBst3.contains('a')).to.equal(false);
  })

  it("should return the correct size of the tree", function(){
    var testBst4 = new Bst(4, true);
    testBst4.insert(5);
    testBst4.insert(2);
    testBst4.insert(3);
    testBst4.insert(1);
    expect(testBst4.size()).to.equal(5);
  })

  it("should return the correct depth of the tree", function(){
    var testBst5 = new Bst(4, true);
    testBst5.insert(5);
    testBst5.insert(2);
    testBst5.insert(3);
    testBst5.insert(1);
    expect(testBst5.depth()).to.equal(3);
  })

  it("should return the balance", function(){
    var testBst6 = new Bst(4, true);
    testBst6.insert(5);
    testBst6.insert(2);
    testBst6.insert(3);
    testBst6.insert(1);
    expect(testBst6.balance()).to.equal(1);
    testBst6.insert(6);
    expect(testBst6.balance()).to.equal(0);
    testBst6.insert(7);
    expect(testBst6.balance()).to.equal(-1);
    testBst6.insert(8);
    expect(testBst6.balance()).to.equal(-2);
  })

  it("should return the values in order, in an array", function(){
    var testBst7 = new Bst(4, true);
    var results7 = [1,2,3,4,5]
    testBst7.insert(5);
    testBst7.insert(2);
    testBst7.insert(3);
    testBst7.insert(1);
    expect(compareArrays(testBst7.in_order(), results7)).to.equal(true);
  })

  it("should return the values in pre-order, in an array", function(){
    var testBst8 = new Bst(4, true);
    var results8 = [4,2,1,3,5]
    testBst8.insert(5);
    testBst8.insert(2);
    testBst8.insert(3);
    testBst8.insert(1);
    expect(compareArrays(testBst8.pre_order(), results8)).to.equal(true);
  })

  it("should return the values in post-order, in an array", function(){
    var testBst9 = new Bst(4, true);
    var results9 = [1,3,2,5,4]
    testBst9.insert(5);
    testBst9.insert(2);
    testBst9.insert(3);
    testBst9.insert(1);
    expect(compareArrays(testBst9.post_order(), results9)).to.equal(true);
  })

  it("should return the values in breadth-first order, in an array", function(){
    var testBst10 = new Bst(4, true);
    var results10 = [4,2,5,1,3]
    testBst10.insert(5);
    testBst10.insert(2);
    testBst10.insert(3);
    testBst10.insert(1);
    expect(compareArrays(testBst10.breadth_first(), results10)).to.equal(true);
  })
})
