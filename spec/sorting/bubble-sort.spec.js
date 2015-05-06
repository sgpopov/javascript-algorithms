(function () {
  'use strict';

  var sortTest = require('./sorting-base');
  var bubbleSort = require('../../algorithms/sorting/bubble-sort').bubbleSort;

  sortTest(bubbleSort, 'Bubble Sort');
}());
