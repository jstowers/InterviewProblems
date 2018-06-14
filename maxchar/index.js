// MaxChar
// Joseph Stowers
// June 13, 2018

/*
	Given a string, return the character that appears the most within the string.


	Common String Questions
	1.  What is the most common character in a string?
	2.  Does string A have the same characters as string B (anagram)?
	3.  Does the given string have any repeated characters?
*/



function maxChar(str) {

	
	let maxCharacter = '';
	let highCount = 0;

	// split the string into characters
	let strToArr = str.split('');

	// create a character map object that stores the character and the count 
	// of that character => { char: count }
	let charMap = buildCharMap(strToArr);

	// loop through the character map and return the key with the highest value
	for (char in charMap) {
		if (charMap[char] > highCount) {
			highCount = charMap[char];
			maxCharacter = char;
		}
	}

	// return the character with the highest count
	return maxCharacter;
}

function buildCharMap(array) {
	
	return array.reduce((accum, element) => {

		// the element does not exist in the charMap object
		if(typeof accum[element] == 'undefined') {
			accum[element] = 1;
		}
		// add 1 if the element exists in the object
		else {
			accum[element] += 1;
		}
		return accum;
	},{});
}

// console.log('maxChar = ', maxChar('test'));

module.exports = maxChar;