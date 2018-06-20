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

// Case 1:  basic iteration
/*
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
*/

/*
	Case 2:  Recursion

	Key Factors
	1.  if (row === n), we have hit the end of our problem
	2.  if 'stair' string length === n, we are at the end of a row
	3.  if length of 'stair' string <= row number, then add #,
	otherwise add a space
*/

function steps(n, row = 0, stair = '') {

	if (row === n) {
		return;
	}

	while (stair.length < n) {
		if(stair.length <= row) {
			stair += '#';
		} else {
			stair += ' ';
		}
	}

	console.log(stair);
	steps(n, row+1, '');

}

module.exports = steps;
