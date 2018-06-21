// Spiral Matrix
// June 20, 2018

/*
	Write a function that accepts an integer N and returns a N x N spiral matrix.

	matrix(3)	=>	[[1, 2, 3],
					 [8, 9, 4],
					 [7, 6, 5]]

	matrix(4)	=>	[[ 1,  2,  3, 4],
					 [12, 13, 14, 5],
					 [11, 16, 15, 6],
					 [10,  9,  8, 7]]
*/

function matrix(n) {
	
	let results = [];

	// create results array
	for (let i = 0; i < n; i++) {
		results.push([]);
	}

	let counter = 1;

	// variables to track location in grid
	let startRow = 0;
	let endRow = n - 1;

	let startCol = 0;
	let endCol = n - 1;

	while (startCol <= endCol && startRow <= endRow) {

		// top row
		for(let i = startCol; i <= endCol; i++) {
			results[startRow][i] = counter;
			counter++;
		}
		startRow++;

		// right column
		for(let i = startRow; i <= endRow; i++) {
			results[i][endCol] = counter;
			counter++;
		}
		endCol--;
		
		// bottom row
		for(let i = endCol; i >= startCol; i--) {
			results[endRow][i] = counter;
			counter++;
		}
		endRow--;

		// left column
		for (let i = endRow; i >= startRow; i--) {
			results[i][startCol] = counter;
			counter++
		}
		startCol++;
	}

	return results;
}

module.exports = matrix;
