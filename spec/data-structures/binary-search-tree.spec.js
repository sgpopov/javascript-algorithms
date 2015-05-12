var BinarySearchTree = require('../../algorithms/data-structures/binary-search-tree').BinarySearchTree;

describe('Binary Search Tree', function () {
  'use strict';

  //
  //          12
  //       /      \
  //      5        15
  //     / \      /  \
  //    3   7    13   17
  //   /     \    \     \
  //  1       9    14    20
  //         / \        /
  //        8   11     18
  //
  var input = [12, 5, 15, 3, 7, 13, 17, 1, 9, 14, 20, 8, 11, 18];

  it('root should be null', function () {
    var bst = new BinarySearchTree();

    expect(bst.root).toBe(null);
  });

  it('should contain 14 elements', function () {
    var bst = new BinarySearchTree();

    input.forEach(function (elem) {
      bst.add(elem);
    });

    expect(bst.size()).toBe(14);
  });

  it('should add and remove one node', function () {
    var bst = new BinarySearchTree();
    bst.add(1);
    bst.remove(1);

    expect(bst.root).toBe(null);
  });

  it('should replace the root node with a child', function () {
    var bst = new BinarySearchTree();
    bst.add(1);
    bst.add(2);
    bst.add(3);
    expect(bst.root.value).toBe(1);

    bst.remove(1);
    expect(bst.root.value).toBe(2);
  });

  it('should insert multiple nodes', function () {
    var bst = new BinarySearchTree();

    input.forEach(function (elem) {
      bst.add(elem);
    });

    var root = bst.root;
    var rootLeftChild = root.left;
    var rootRightChild = root.right;

    expect(root.value).toBe(12); // 12

    expect(rootLeftChild.value).toBe(5); // 12 -> 5
    expect(rootLeftChild.left.value).toBe(3); // 12 -> 5 -> 3
    expect(rootLeftChild.right.value).toBe(7); // 12 -> 5 -> 7
    expect(rootLeftChild.left.left.value).toBe(1); // 12 -> 5 -> 3 -> 1
    expect(rootLeftChild.left.left.left).toBe(null); // 12 -> 5 -> 3 -> 1 -> NULL (left child)
    expect(rootLeftChild.left.left.right).toBe(null); // 12 -> 5 -> 3 -> 1 -> NULL (right child)
    expect(rootLeftChild.right.left).toBe(null); // 12 -> 5 -> 7 -> NULL (left child)
    expect(rootLeftChild.right.right.value).toBe(9); // 12 -> 5 -> 7 -> 9
    expect(rootLeftChild.right.right.left.value).toBe(8); // 12 -> 5 -> 7 -> 9 -> 8
    expect(rootLeftChild.right.right.right.value).toBe(11); // 12 -> 5 -> 7 -> 9 -> 11

    expect(rootRightChild.value).toBe(15); // 12 -> 15 (right child)
    expect(rootRightChild.left.value).toBe(13); // 12 -> 15 -> 13 (left child)
    expect(rootRightChild.right.value).toBe(17); // 12 -> 15 -> 17 (right child)
    expect(rootRightChild.left.left).toBe(null); // 12 -> 15 -> 13 -> NULL (left child)
    expect(rootRightChild.left.right.value).toBe(14); // 12 -> 15 -> 13 -> 14 (right child)
    expect(rootRightChild.left.right.left).toBe(null); // 12 -> 15 -> 13 -> 14 -> NULL (left child)
    expect(rootRightChild.left.right.right).toBe(null); // 12 -> 15 -> 13 -> 14 -> NULL (right child)
    expect(rootRightChild.right.left).toBe(null); // 12 -> 15 -> 17 -> NULL (left child)
    expect(rootRightChild.right.right.value).toBe(20); // 12 -> 15 -> 17 -> 20 (right child)
    expect(rootRightChild.right.right.left.value).toBe(18); // 12 -> 15 -> 17 -> 20 -> 18 (left child)
    expect(rootRightChild.right.right.right).toBe(null); // 12 -> 15 -> 17 -> 20 -> NULL (right child)
  });

  it('should remove node with value 15 and replace it with node with value 17', function () {
    var bst = new BinarySearchTree();

    input.forEach(function (elem) {
      bst.add(elem);
    });

    expect(bst.root.right.value).toBe(15);

    expect(bst.remove(15)).toBeTruthy();
    expect(bst.root.right.value).toBe(17);
    expect(bst.root.right.parent.value).toBe(12);
    expect(bst.root.right.left.value).toBe(13);
    expect(bst.root.right.right.value).toBe(20);

    expect(bst.remove(9)).toBeTruthy();
    expect(bst.root.left.right.right.value).toBe(11);
    expect(bst.root.left.right.right.left.value).toBe(8);
    expect(bst.root.left.right.right.right).toBe(null);
    expect(bst.root.left.right.right.parent.value).toBe(7);
  });

  it('should check whenever the tree is balanced', function () {
    var bst = new BinarySearchTree();

    //
    //      3
    //     / \
    //    2   5
    //   /   /  \
    //  1   4    6
    //
    var balancedTree = [3, 2, 1, 5, 6, 4];
    balancedTree.forEach(function (elem) {
      bst.add(elem);
    });

    expect(bst.isBalanced(bst.root)).toBeTruthy();

    bst = new BinarySearchTree();
    input.forEach(function (elem) {
      bst.add(elem);
    });

    expect(bst.isBalanced(bst.root)).toBeFalsy();
  });
});
