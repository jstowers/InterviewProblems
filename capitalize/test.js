const capitalize = require('./index');

describe('Capitalize', () => {

	test('capitalize is a function', () => {
		expect(typeof capitalize).toEqual('function');
	});

	test('capitalizes the first letter of every word in a sentence', () => {
	    expect(capitalize('hi there, how is it going?')).toEqual(
	    	'Hi There, How Is It Going?'
	  	);
	});

	test('capitalizes the first letter of every word', () => {
	    expect(capitalize('i love breakfast at bill miller bbq')).toEqual(
	      'I Love Breakfast At Bill Miller Bbq'
	  	);
	});
});

