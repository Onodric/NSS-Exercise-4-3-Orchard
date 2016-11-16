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
