// Queue
// December 3, 2017
// Joseph Stowers

// Implement a queue

// relying upon an array to do the heavy lifting
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
