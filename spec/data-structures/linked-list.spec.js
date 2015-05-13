var LinkedList = require('../../algorithms/data-structures/linked-list').LinkedList;

describe('Linked List', function () {
  'use strict';

  var input = [17, 49, 77, 50, 27, 64, 12, 92, 84, 83, 6, 35, 66, 44, 96, 39];

  it('should have empty pointers', function () {
    var list = new LinkedList();

    expect(list.first).toBe(null);
    expect(list.last).toBe(null);
  });

  it('should add elements at the end of the list', function () {

    //
    // null <- | prev |  <- | prev | <- | prev | <- | prev | <- | prev |
    //         |  1   |     |  2   |    |  3   |    |  4   |    |  5   |
    //         | next |  -> | next | -> | next | -> | prev | -> | next | -> null
    //
    var list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);

    expect(list.first.data).toBe(1);
    expect(list.first.prev).toBe(null);

    expect(list.first.next.data).toBe(2);
    expect(list.first.next.prev.data).toBe(1);

    expect(list.first.next.next.data).toBe(3);
    expect(list.first.next.next.prev.data).toBe(2);

    expect(list.first.next.next.next.data).toBe(4);
    expect(list.first.next.next.next.prev.data).toBe(3);

    expect(list.first.next.next.next.next.data).toBe(5);
    expect(list.first.next.next.next.next.prev.data).toBe(4);

    expect(list.first.next.next.next.next.next).toBe(null);
  });

  it('should add elements at the beginning of the list', function () {
    //
    // null <- | prev |  <- | prev | <- | prev | <- | prev | <- | prev |
    //         |  5   |     |  4   |    |  3   |    |  2   |    |  1   |
    //         | next |  -> | next | -> | next | -> | prev | -> | next | -> null
    //
    var list = new LinkedList();
    list.unshift(1);
    list.unshift(2);
    list.unshift(3);
    list.unshift(4);
    list.unshift(5);

    expect(list.first.data).toBe(5);
    expect(list.first.prev).toBe(null);

    expect(list.first.next.data).toBe(4);
    expect(list.first.next.prev.data).toBe(5);

    expect(list.first.next.next.data).toBe(3);
    expect(list.first.next.next.prev.data).toBe(4);

    expect(list.first.next.next.next.data).toBe(2);
    expect(list.first.next.next.next.prev.data).toBe(3);

    expect(list.first.next.next.next.next.data).toBe(1);
    expect(list.first.next.next.next.next.prev.data).toBe(2);

    expect(list.first.next.next.next.next.next).toBe(null);
  });

  it('should remove an element', function () {
    var list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);

    expect(list.first.next.next.data).toBe(3);
    expect(list.first.next.next.prev.data).toBe(2);

    expect(list.first.next.next.next.data).toBe(4);
    expect(list.first.next.next.next.prev.data).toBe(3);

    expect(list.remove(3)).toBeTruthy();

    expect(list.first.next.next.data).toBe(4);
    expect(list.first.next.next.prev.data).toBe(2);

    expect(list.first.next.next.next.data).toBe(5);
    expect(list.first.next.next.next.prev.data).toBe(4);
  });

  it('should shift first element', function () {
    var list = new LinkedList();

    input.forEach(function (el) {
      list.add(el);
    });

    for (var i = 0; i < input.length; i += 1) {
      expect(list.first.data).toBe(input[i]);
      expect(list.shift().data).toBe(input[i]);

      if (i !== input.length - 1) {
        expect(list.first.data).toBe(input[i + 1]);
        expect(list.first.prev).toBe(null);
      }
      else {
        expect(list.first).toBe(null);
      }
    }
  });

  it('should pop last element', function () {
    var list = new LinkedList();

    input.forEach(function (el) {
      list.add(el);
    });

    for (var i = input.length - 1; i >= 0; i -= 1) {
      expect(list.last.data).toBe(input[i]);
      expect(list.pop().data).toBe(input[i]);

      if (i !== 0) {
        expect(list.last.next).toBe(null);
      }
      else {
        expect(list.last).toBe(null);
      }
    }

    expect(list.pop()).toBeFalsy();
  });

  it('should reverse the list', function () {
    var list = new LinkedList();

    input.forEach(function (el) {
      list.add(el);
    });

    list.reverse();
    var current = list.first;

    for (var i = input.length - 1; i >= 0; i -= 1) {
      expect(current.data).toBe(input[i]);
      current = current.next;
    }
  });

  it('should calculate the size of the list', function () {
    var list = new LinkedList();

    input.forEach(function (el) {
      list.add(el);
    });

    expect(list.size()).toBe(input.length);
  });
});
