(function (exports) {
  'use strict';

  function Node(value, left, right, parent) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }

  var BinarySearchTree = function () {
    this.root = null;
  };

  BinarySearchTree.prototype.add = function (value) {
    if (this.root === null) {
      this.root = new Node(value, null, null, null);
      return;
    }
    else {
      var current = this.root;

      while (current) {
        // if the new value is less than this node's value, go left
        if (value < current.value) {
          // if there's no left, then the new node belongs there
          if (current.left === null) {
            current.left = new Node(value, null, null, current);
            break;
          }
          else {
            current = current.left;
          }
        }
        // if the new value is less than this node's value, go right
        else if (value > current.value) {
          // if there's no right, then the new node belongs there
          if (current.right === null) {
            current.right = new Node(value, null, null, current);
            break;
          }
          else {
            current = current.right;
          }
        }
        // if the new value is equal to the current one, just ignore
        else {
          break;
        }
      }
    }
  };

  BinarySearchTree.prototype.find = function (value, current) {
    current = current || this.root;

    if (!current) {
      return null;
    }

    if (value === current.value) {
      return current;
    }

    if (value < current.value) {
      return this.find(value, current.left);
    }

    if (value > current.value) {
      return this.find(value, current.right);
    }
  };

  BinarySearchTree.prototype.replace = function (parent, oldChild, newChild) {
    if (parent === null) {
      this.root = newChild;

      if (this.root !== null) {
        this.root.parent = null;
      }
    }
    else {
      if (parent.left === oldChild) {
        parent.left = newChild;
      }
      else {
        parent.right = newChild;
      }

      if (newChild) {
        newChild.parent = parent;
      }
    }
  };

  BinarySearchTree.prototype.findMin = function (node) {
    while (node.left !== null) {
      node = node.left;
    }

    return node;
  };

  BinarySearchTree.prototype.findMax = function (node) {
    while (node.right !== null) {
      node = node.right;
    }

    return node;
  };

  BinarySearchTree.prototype.remove = function (value, current) {
    current = current || this.root;

    if (current === null) {
      return false;
    }
    else if (value < current.value) {
      return this.remove(value, current.left);
    }
    else if (value > current.value) {
      return this.remove(value, current.right);
    }
    else {
      // When there are no child nodes
      if (current.left === null && current.right === null) {
        this.replace(current.parent, current, null);
      }
      // When there is only one child
      else if (current.left === null || current.right === null) {
        this.replace(current.parent, current,
          (current.left !== null) ? current.left : current.right);
      }
      // When there are two children
      else {
        var min = this.findMin(current.right);
        current.value = min.value;

        return this.remove(min.value, current.right);
      }

      return true;
    }
  };

  BinarySearchTree.prototype.contains = function (value) {
    var found = false;
    var current = this.root;

    while (!found && current) {
      if (value < current.value) {
        current = current.left;
      }
      else if (value > current.value) {
        current = current.right;
      }
      else {
        found = true;
      }
    }

    return found;
  };

  BinarySearchTree.prototype.traverse = function (callback) {
    return this.inOrder(this.root, callback);
  };

  BinarySearchTree.prototype.inOrder = function (node, callback) {
    if (!node) {
      return;
    }

    this.inOrder(node.left, callback);

    callback(node);

    this.inOrder(node.right, callback);
  };

  BinarySearchTree.prototype.size = function () {
    var length = 0;

    this.traverse(function () {
      length += 1;
    });

    return length;
  };

  BinarySearchTree.prototype.getHeight = function (node) {
    if (node === null) {
      return 0;
    }

    return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  };

  BinarySearchTree.prototype.isBalanced = function (node) {
    if (node === null) {
      return true;
    }

    var leftHeight = this.getHeight(node.left);
    var rightHeight = this.getHeight(node.right);

    return Math.abs(leftHeight - rightHeight) <= 1 &&
      this.isBalanced(node.left) && this.isBalanced(node.right);
  };

  BinarySearchTree.prototype.toArray = function () {
    var result = [];

    this.traverse(function (node) {
      result.push(node.value);
    });

    return result;
  };

  BinarySearchTree.prototype.toString = function () {
    return this.toArray().toString();
  };

  exports.BinarySearchTree = BinarySearchTree;

})(typeof exports === 'undefined' ? window : exports);
