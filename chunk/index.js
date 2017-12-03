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

	// create empty result array, whose elements (chunks)
	// will be arrays of length size
	const chunked = [];

	for (let element of array) {

		// get last array element [] (or "chunk") in chunked []
		const last = chunked[chunked.length - 1];

		// test to push new chunk [] into chunked []
		if (!last || last.length === size) {
			chunked.push([element]);
		} else {
			// have a chunk, but not yet full, then
			// push the current element into the last chunk
			last.push(element);
		}
	}

	return chunked;

}

// console.log(chunk([1,2,3,4],2));

module.exports = chunk;