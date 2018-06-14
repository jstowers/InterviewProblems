// Island Count
// December 9, 2017

/*
	DESCRIPTION:
 	Given a 2D array where '1' represents an island or part
 	of an island, and '0'represents water, return the number 
 	of islands in the array.

 	Adjacent land '1' elements, either vertically or horizontally
 	count as part of the same island.

 	EXAMPLE:

 		1 0	0
 		1 1 0
 		0 0	1

 		should return 2
*/

/*
function getDimensions(array) {
	let X = array[0].length;
	let Y = array.length;
	return [X, Y];
}

function checkElementLocation(element, x, y) {
	console.log('element =', element);
	console.log('x =', x);
	console.log('y =', y);
}

function visited(i, j) {



	return true;

}


function islandCount(array) {

	let count = 0;
	let visited = [];

	console.log('array =', array);

	// create visited array
	for (let i = 0; i < array.length; i++) {
		visited.push([]);

		for (let j = 0; j < array.length; j++) {
			visited[i].push(false);
		}
	}

	console.log('visited =', visited);

	for (let i = 0; i < array.length; i++) {

		let tempCount = 0;

		for (let j = 0; j < array[i].length; j++) {
			let element = array[i][j];
			console.log('element =', element);

			// want to keep a storage array of elements visited
			visited[i,j] = true;
			
			if (element === 1) {

				// then visit each neighbor

			} 


			// determine which neighboring elements exist:
			// data needed: current element i/j, array, visited[]
			// return visited
			// checkNeighbors(i,j,array,storage);

			// if all neighboring elements are 0, then tempCount += 1;

			// if neighboring elements are border


			// for each element, see if land or sea;
			// if land, add 1 to temp count and then check neighboring elements
			if (element === 1) {
				console.log('I am the land.');
				tempCount += 1;
				checkElement(array,element,);
			}

			// if sea, proceed to next element in the row
			else {
				console.log('I am the sea.');
			}
		}

		count += tempCount;
	}

	return count;
}


let islandArray = [[1,0,0], [1,1,0], [0,0,1]];
console.log('islandCount =', islandCount(islandArray));



	/*
	let arrayDimensions = getDimensions(array);
	let X = arrayDimensions[0];
	let Y = arrayDimensions[1];

	console.log('X =', X);
	console.log('Y =', Y);

	// i = X axis => across
	// j = Y axis => down

	for (let j = 0; j < Y; j++) {
		for (let i = 0; i < X; i++) {

			// check element location
			checkElementLocation(array[i][j],i,j);



		}
	}
	*/