// Queue
// December 3, 2017
// Joseph Stowers

// Implement a queue (FIFO)
// relying upon an array to do the heavy lifting

// [nth, . . . , 4th, 3rd, 2nd, 1st]

class Queue {

	// constructor automatically called when
	// create a new instance of a class
	constructor() {
		this.data = [];
	}

	// add data to Front of array => unshift()
	add(record) {
		this.data.unshift(record);
	}

	// remove last record of array => pop()
	remove() {
		return this.data.pop();
	}

}


// Alternative Implementation
/*	[1st, 2nd, 3rd, 4th, . . . , nth]

	Use push() to push into back of array

	Use shift() to remove the 1st element of the array.
*/


	