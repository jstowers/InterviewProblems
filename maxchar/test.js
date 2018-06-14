// June 13, 2018
// 

const maxChar = require('./index');

test('maxChar function is defined', () => {
	expect(typeof maxChar).toEqual('function');
});

test('returns a character', () => {
	expect(typeof maxChar('test')).toEqual('string');
});

test('returns \'t\' for string \'test\'', () => {
  	expect(maxChar('test')).toEqual('t');
});

