// Reverse String
// June 16, 2018

/*
	Given a string, return a new string with the reversed
	order of characters.

	reverse('apple')  => 'elppa'

	reverse('hello')  => 'olleh'

	reverse('Greetings!')  => '!sgniteerG'

*/


// Option 1 - for loop

function reverse (str) {

	let reversed = '';

	for (let char of str) {
		reversed = char + reversed;
	}

	return reversed;

}

/*
// Option 2 - recursion

function reverse (str) {

	let result = [];

	// split string into array
	let strToArr = str.split('');

	function recurse(arr) {

		if (arr.length === 0) {
			return;
		}

		result.push(arr[arr.length-1]);
		recurse(arr.slice(0, arr.length-1));
	}

	recurse(strToArr);

	return result.join('');

}
*/


/*
// Option 3 - Array.prototype.reverse()

function reverse (str) {

	// 1. split string into an array of elements
	// 2. reverse elements of array
	// 3. join elements into a string
	return str.split('').reverse().join('');

}

*/

module.exports = reverse;