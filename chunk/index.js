// Array Chunk
// December 2, 2017

/*
	GOAL:  Given an array and chunk size, divide the array into many subarrays
	where each subarray is of length size.

	EXAMPLES:
		chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
		chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
		chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
		chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
		chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/

function chunk(array, size) {

	// create empty result array
	const chunked = [];

	for (let element of array) {

		// get last element in chunked array
		const last = chunked[chunked.length - 1];

		if (!last || last.length === size) {
			chunked.push([element]);
		} else {
			// have a chunk, but not yet full
			last.push(element);
		}
	}

	return chunked;

}

console.log(chunk([1,2,3,4],2));



/*
	SCRAP CODE

	

	}

	for (let i = 0; i < array.length; i++) {

		if (chunked[i] === undefined || chunked[i].length === size) {

			chunked[i].push(array[i]);

		} else chunked.push(array[i]);
	}



	// if array length < size, return array
	if (array.length < size) {
		result.push(array);
	}

	// determine number of sub arrays
	let numSubArr;
	if (array.length % size != 0) {
		numSubArr = array.length / size + 1
	} else numSubArr = array.length / size;

	for (int i = 0; i < size-1; i++) {
		for (int j = 0; j < array.length; j++) {
			result[i].push(arr[j])
		}
	}

	return result;
}
*/

module.exports = chunk;