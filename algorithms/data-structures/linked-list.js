(function (exports) {
  'use strict';

  function Struct(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }

  var LinkedList = function () {
    this.first = null;
    this.last = null;
  };

  /**
   * Add data at the end of the list.
   *
   * @param {Object} data - Input data.
   */
  LinkedList.prototype.add = function(data) {
    var struct = new Struct(data);

    if (this.first === null) {
      this.first = this.last = struct;
    }
    else {
      struct.prev = this.last;
      this.last.next = struct;
      this.last = struct;
    }
  };

  /**
   * Add data at the beginning of the list.
   *
   * @param  {Object} data - Input data.
   */
  LinkedList.prototype.unshift = function(data) {
    var struct = new Struct(data);

    if (this.first === null) {
      this.first = this.last = struct;
    }
    else {
      struct.next = this.first;
      this.first.prev = struct;
      this.first = struct;
    }
  };

  /**
   * Remove element from the list.
   *
   * @param  {Object} data - The data we're gonna remove.
   *
   * @return {Boolean} - Returns true if data has been removed.
   */
  LinkedList.prototype.remove = function(data) {
    if (this.first === null) {
      return false;
    }

    var current = this.first;
    var prev = this.first;

    while (current) {
      if (current.data === data) {

        prev.next = current.next;

        if (current.next !== null) {
          current.next.prev = prev;
        }

        if (current === this.last) {
          this.last = prev;
        }

        if (current === this.first) {
          this.first = current.next;
        }

        return true;
      }

      prev = current;
      current = current.next;
    }

    return false;
  };

  /**
   * Removes the first element from the list and returns that element.
   *
   * @return {Node} - The first element from the list.
   */
  LinkedList.prototype.shift = function() {
    if (this.first === null) {
      return null;
    }

    var shifted = this.first;

    if (this.first.next !== null) {
      this.first.next.prev = null;
    }

    this.first = shifted.next;

    return shifted;
  };

  /**
   * Removes the last element from the list and returns that element.
   *
   * @return {Node} - The last element from the list.
   */
  LinkedList.prototype.pop = function() {
    if (this.last === null) {
      return null;
    }

    var popped = this.last;

    if (this.last.prev !== null) {
      this.last.prev.next = null;
    }

    this.last = popped.prev;

    return popped;
  };

  /**
   * Traversing the list to access all elements.
   *
   * @param  {Function} callback - Callback which should be executed on
   * each element.
   */
  LinkedList.prototype.traverse = function(callback) {
    var current = this.first;

    while (current) {
      callback(current);
      current = current.next;
    }
  };

  /**
   * Reverses the list.
   */
  LinkedList.prototype.reverse = function() {
    if (this.first === null) {
      return;
    }

    this.recursiveReverse(this.first, this.first.next);

    this.first.next = null;
    var tmp = this.first;
    this.first = this.last;
    this.last = tmp;
  };

  LinkedList.prototype.recursiveReverse = function(current, next) {
    if (next === null) {
      return;
    }

    this.recursiveReverse(next, next.next);
    next.next = current;
  };

  /**
   * Determining the size (number of elements) of the list.
   *
   * @return {Number} - List size.
   */
  LinkedList.prototype.size = function() {
    if (this.first === null) {
      return 0;
    }

    var size = 0;
    var current = this.first;

    while (current) {
      size += 1;
      current = current.next;
    }

    return size;
  };

  exports.LinkedList = LinkedList;

})(typeof exports === 'undefined' ? window : exports);
