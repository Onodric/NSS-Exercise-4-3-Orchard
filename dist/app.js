(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var Tree = require("./trees.js");
const $ADDTODOM = $('#insertHere');
const $PEARGROW = $('#pearHt');
const $OAKGROW = $('#oakHt');
const $DURATION = $('#timer');
let intervalId;
let counter = 0;

// 1. Create a PearTree instance of Tree. `var PearTree = new Tree();`
var PearTree = new Tree();
// 1. Create an OakTree instance of Tree.
var OakTree = new Tree();


function growThemTrees () {
  PearTree.grow(parseInt($PEARGROW.val()));
  OakTree.grow(parseInt($OAKGROW.val()));
// 1. Also output the current height of each tree and how many branches it has to the DOM.
//   > Pear tree is now 23cm tall and has 2 branches
//   > Oak tree is now 57cm tall and has 4 branches
  $ADDTODOM.append('<p>Cycle ' + (counter+1) + ' | Pear tree is now ' + PearTree.height + 'cm tall and has ' + PearTree.branches + ' branches.</p><p>        Oak tree is now ' + OakTree.height + 'cm tall and has ' + OakTree.branches + ' branches.</p>');
  counter++;
  console.log("counter: ", counter);
  if (counter >= parseInt($DURATION.val())){
// 1. Stop growing the trees after they have grown 30 times.
    stopGrow();
  }
}

function stopGrow() {
  window.clearInterval(intervalId);
}

$('#grower').click(function (event) {
// 1. Every second, increase the height the pear tree by some integer value and increase the height the oak tree by some integer value that is **larger** than what you used for the pear tree.
  intervalId = setInterval(function(){
    growThemTrees();} , 1000);
});

console.log("Pear: ", PearTree);
console.log("Oak: ", OakTree);



},{"./trees.js":2}],2:[function(require,module,exports){
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
console.log("Trim: ", this);
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

},{}]},{},[1]);
