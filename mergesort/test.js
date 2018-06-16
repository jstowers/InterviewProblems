const M = require('./index');
const mergeSort = M.mergeSort;
const merge = M.merge;

// To run the tests in watch mode: 
// $ jest mergesort/test.js --watch

function getArray() {
  return [100, -40, 500, -124, 0, 21, 7];
}

function getSortedArray() {
  return [-124, -40, 0, 7, 21, 100, 500];
}

describe('Merge Sort', () => {

  test('merge function can join together two sorted arrays', () => {
    const left = [1, 10];
    const right = [2, 8, 12];
    expect(merge(left, right)).toEqual([1,2,8,10,12]);
  });
  
  test('sorts an array', () => {
    expect(mergeSort(getArray())).toEqual(getSortedArray());
  });
});