var expect = require('chai').expect;
var Bst = require('../lib/bst');

describe("create a new binary search tree and test it's methods", function(){
  it("should create a tree with a value and null left/right nodes", function(){
    var testBst = new Bst(5, true);
    expect(testBst.left.val).to.equal(null);
    expect(testBst.right.val).to.equal(null);
    expect(testBst.val).to.equal(5);
  })
})
