// Reverse Integers
// May 28, 2018

/*
	Directions
	----------

	Given an integer, return an integer that is the reverse ordering of numbers.

	
	Examples
	--------

	reverseInt(15)  => 51
	reverseInt(981) => 189
	reverseInt(-19) => -91
	reverseInt(500) => 5
	reverseInt(-90) => -9

*/

function reverseInt(n) {

	// determine sign of integer
	let sign = Math.sign(n);

	// convert int to string and split into array
	let stringArr = n.toString().split('');
	console.log("stringArr = ", stringArr);

	// create storage array
	let storage = [];

	// loop through string from right to left
	// if digit != 0 || storage.length > 0, then push digit into storage array
	for (let i = stringArr.length - 1; i >= 0; i-- ) {
		console.log('stringArr[i] = ', stringArr[i]);

		if (stringArr.length === 1 && stringArr[i] == 0) {
			return 0;
		} else if (stringArr[i] != 0 || storage.length > 0) {
			storage.push(stringArr[i]);
		}
	}

	// convert string to integer and check for sign
	let result = parseInt(storage.join('')) * sign;
	console.log('result = ', result);
	console.log('result is an integer =', Number.isInteger(result));

	return result;
}


console.log('reverseInt(15) =', reverseInt(15));

console.log('reverseInt(900) =', reverseInt(900));

console.log('reverseInt(0) =', reverseInt(0));

console.log('reverseInt(-90) =', reverseInt(-90));

console.log('reverseInt(-19) =', reverseInt(-19));

module.exports = reverseInt;