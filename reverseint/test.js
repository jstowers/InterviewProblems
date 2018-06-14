// ReverseInt Test Suite
// May 28, 2018

// To run test suite from InterviewProblems directory:  
//   $ jest reverseint/test.js --watch

const reverseInt = require('./index');

test('reverseInt function is defined', () => {
  expect(reverseInt).toBeDefined();
});

test('reverseInt handles 0 as an input', () => {
	expect(reverseInt(0)).toEqual(0);
});