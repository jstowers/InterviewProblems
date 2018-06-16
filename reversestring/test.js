
const reverse = require('./index');

describe('Reverse String', () => {

	test('reverse function should be defined', () => {
		expect(reverse).toBeDefined();
	});

	test('reverses string \'abcd\' to \'dcba\'', () => {
  		expect(reverse('abcd')).toEqual('dcba');
	});

	test('reverses string \'hello\' to \'olleh\'', () => {
  		expect(reverse('hello')).toEqual('olleh');
	});

	test('reverses string \'Greetings !\' to \'! sgniteerG\'', () => {
  		expect(reverse('Greetings !')).toEqual('! sgniteerG');
	});
});