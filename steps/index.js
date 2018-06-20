// Joseph Stowers
// June 19, 2018


/*
Write a function that accepts a number, n, and console logs 
a step shape with n levels using the # character.  
Make sure the step has spaces on the right side.

	n = 3	'#  '
			'## '
			'###'

	n = 5	'#    '
			'##   '
			'###  '
			'#### '
			'#####'
*/


function steps(n) {

	// need two loops, one for the row and one for the column
	// iterate over rows
	for (let row = 0; row < n; row++) {

		// stair string for each row
		let stair = '';

		// iteratre across the columns
		for (let col = 0; col < n; col++) {
			if(col <= row) {
				stair += '#';
			} else {
				stair += ' ';
			}
		}
		console.log(stair);
	}
}

console.log('steps(5) =', steps(5));
console.log('steps(3) =', steps(3));

module.exports = steps;