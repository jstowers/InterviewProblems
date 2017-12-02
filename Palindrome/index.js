// Palindrome
// December 2, 2017
// Joe Stowers

/*
	GOAL:  Determine if a string is a palindrome.

	A palindrome is a word, phrase, or sequence that reads 
	the same backward as forward.  The word derives from the Greek ‘palin,’ 
	or “back” and ‘dromos,’ or "direction."

	Example:
	  	palindrome("abba")    => true
	  	palindrome("racecar") => true
	  	palindrome(" abba")   => false
  		palindrome("abcd")    => false
*/


/*  
	METHOD 1:
	Use Array.prototype.reverse()
*/

/*
function palindrome(str) {

	const reversed = str.split('').reverse().join('');
	return str === reversed;

}
*/


/*
	METHOD 2:
	Use recursion
*/

function palindrome(str) {

	function recursive(string) {
		
		if (string.length === 0){
			return true;
		}

		let firstChar = string.charAt(0);
		let lastChar = string.charAt(string.length-1);

		if (firstChar === lastChar){
			return recursive(string.slice(1, string.length-1));
		} else {
			return false;
		}
	}

	return recursive(str);

	// Optional:
	// Use regex to remove blank spaces and punctuation characters from string
	// Will allow upper- and lower-case alphabet characters, numbers 0-9, and '-'
	// This option will require changes to the test return values.
	// return recursive(str.replace(/[^A-Za-z0-9-]+/g, ''));
}


/*
	METHOD 3:
	Use Array.prototype.every()

	The every() method tests whether all elements in the array pass the 
	test implemented by the provided function.

*/

function palindrome(str) {

	let strArr = str.split('');

	return strArr.every((char, i) => {
		return char === strArr[strArr.length -i -1];
	})
}

// console.log('palindrome("abba") =', palindrome('abba'));

module.exports = palindrome;

