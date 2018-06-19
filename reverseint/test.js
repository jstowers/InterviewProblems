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

test('reverseInt flips a positive number', () => {
	expect(reverseInt(5)).toEqual(5);
	expect(reverseInt(15)).toEqual(51);
	expect(reverseInt(90)).toEqual(9);
	expect(reverseInt(2359)).toEqual(9532);
});

test('reverseInt flips a negative number', () => {
	expect(reverseInt(-5)).toEqual(-5);
	expect(reverseInt(-15)).toEqual(-51);
	expect(reverseInt(-90)).toEqual(-9);
	expect(reverseInt(-2359)).toEqual(-9532);
});
