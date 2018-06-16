// MergeSort
// June 16, 2018

function mergeSort(array) {

	console.log('array =', array);
	
	if(array.length < 2) {
		return array;
	}

	let mid = Math.floor(array.length/2);
	let loArr = array.slice(0, mid);
	let hiArr = array.slice(mid);

	return merge(mergeSort(loArr), mergeSort(hiArr));

}


/* 
	merge() takes two sorted arrays and merges them into one sorted array:

		[ -30, 97 ]	   [ 0, 22 ]    =>    [ -30, 0, 22, 97 ]
*/

function merge(left, right) {

	let result = [];

	// shift() removes the first element of an
	// array and returns that element.
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift())
		}
	}

	// creates a new empty array that adds all the elements
	// of the result array, then the left array (if any), then
	// the right array (if any)
	return [...result, ...left, ...right];
}

module.exports = { mergeSort, merge }


