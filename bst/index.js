// Binary Search Tree
// June 16, 2018

/*
	Directions
	1.  Implement the Node class to create a binary search tree.
	The constructor should initialize values 'data', 'left', and 'right'.

	2.  Implement the 'insert' method for the Node class.  
	The method should accept an argument 'data', then create and insert 
	a new node at the appropriate location in the tree.

	3.  Implement the 'contains' method for the Node class.

*/

class Node {

	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	insert(value) {

		if ( value < this.value ) {
			// does current node have a left value?
			if(!this.left){
				this.left = new Node(value);
			} else {
				this.left.insert(value);
			}
		} else if ( value > this.value ) {
			// does current node have a right value?
			if(!this.right) {
				this.right = new Node(value);
			} else {
				this.right.insert(value);
			}
		}	
	}

	// returns the Node, if any, associated with the given value
	// returns null if the value does not exist
	contains(value) {
		// does current node equal the value?
		if ( this.value === value ) {
			return this;
		}
		else if ( value < this.value && this.left ) {
			return this.left.contains(value);
		} 
		else if ( value > this.value && this.right) {
			return this.right.contains(value);
		}
		return null;
	}
}

module.exports = Node;
