// Capitalize
// June 16, 2018

/*
	Write a function that accepts a string, capitalizes the first letter
	of each word in the string, and returns the result as a new string.

	-- Examples --
	capitalize('a short sentence')  => 'A Short Sentence'
*/


// First Pass - uses forEach() callback

function capitalize(string) {

	let strToArr = string.split(' ');
	let result = [];

	strToArr.forEach((word) => {
		result.push(word[0].toUpperCase() + word.slice(1));
	});

	return result.join(' ');
}


// Second Pass - iterate through string
/*
function capitalize(string) {
	
	let result = string[0].toUpperCase();

	for (let i = 1; i < string.length; i++) {
		if(string[i - 1] === ' ') {
			result += string[i].toUpperCase();
		} else {
			result += string[i];
		}
	}
	
	return result;
}
*/


// Third Pass - uses reduce()
/*
function capitalize(string) {

	let strToArr = string.split(' ');

	return strToArr.reduce((accum, word, index) => {

		accum += word.charAt(0).toUpperCase() + word.slice(1);

		if(index != strToArr.length - 1) {
			return accum += ' ';
		} else {
			return accum;
		}
	},'');
}
*/

module.exports = capitalize;
