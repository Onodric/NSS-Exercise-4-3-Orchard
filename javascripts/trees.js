"use strict";

// 1. Create a Plant function.
var Plant = function(){
// 1. Plant should have a property of `height`.
  this.height = 0;
// 1. The Plant prototype should have two methods on it: `increaseHeight` and `decreaseHeight`. Each method should accept an integer value as input.
  this.increaseHeight = function(int){
// 1. `increaseHeight` should increase the value of the `height` property by the amount passed in as an argument.
    this.height += int;
  };
  this.decreaseHeight = function(int){
// 1. `decreaseHeight` should decrease the value of the `height` property by the amount passed in as an argument.
    this.height -= int;
  };
};

// 1. Create a Tree function.
Plant.Tree = function(){
// 1. Tree should have a property of `branches`.
  this.branches = 0;
  this.heightSinceLastBranch = 0;
  this.grows = 0;

// 1. The Tree prototype should have two methods on it: `grow` and `trim`.

// 1. The `grow` method should accept an integer value as input.
  this.grow = function(int){
// 1. The `grow` method should increase the height of the tree.
    this.increaseHeight(int);
    this.heightSinceLastBranch += int;
    this.grows++;
// 1. Each time the height of a tree increases by 10, the value of `branch` should increase by one.
    while(this.heightSinceLastBranch >= 10){
      this.branches++;
      this.heightSinceLastBranch -= 10;
    }
    if (this.grows % 10 === 0){
// 1. Every tenth time the trees are grown, invoke the `trim` method. Pass one value to the method for the pear tree, and a larger value to the method on the oak tree.
      this.trim(Math.floor(int * 1.25));
    }
  };

// 1. The `trim` method should accept an integer value as input.
  this.trim = function (int) {
// 1. The `trim` method should decrease the height of the tree.
    this.decreaseHeight(int);
// 1. When the `trim` method is called, the number of branches should decrease by one.
    this.branches--;
    this.heightSinceLastBranch = 0;
  };
};

// 1. Plant should be the prototype of Tree.
Plant.Tree.prototype = new Plant();

module.exports = Plant.Tree;
