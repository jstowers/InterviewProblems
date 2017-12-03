// Tree Data Structure
// December 2, 2017


/*	
	INSTRUCTIONS:

	1.  Create a Node class
		The constructor should accept an argument that gets assigned to the data 
		property, and initialize an empty array for storing children.  
		The Node class should include add and remove methods.

	2.  Create a Tree class  
		The constructor should initialize a root property to null.

	3.  Implement Two Traversal Methods on the Tree class
		a.	Breadth-first:  traverseBF()
		b.  Depth-first:    traverseDF()

		Each method should accept a function that gets called with each node in the Tree.


	QUESTION:
	Why are the add/remove methods implemented at the Node level, not the Tree?

	ANSWER:
	We implement add/remove at the Node level, not the Tree level.
	If we tried to implement an add method on the Tree class, it would
	be difficult to say where to add on the Tree.  But if
	the add/remove method is called at a specific node, we
	know exactly where to add/delete a node.
*/

class Node {

	constructor(data) {
		this.data = data;
		this.children = [];
	}

	// add a Node
	add(data) {
		// create a new Node
		const node = new Node(data);

		// push the new node into the parent's children []
		this.children.push(node);
	}

	// remove a Node
	remove(data) {
		this.children = this.children.filter(node => {
			return node.data !== data;
		})

		console.log('this.children =', this.children);
	}

}

class Tree {

	// assign a root property that references the head of the tree
	constructor() {
		this.root = null;
	}

	// breadth-first traversal
	traverseBF(fn) {

		// uses a queue (FIFO) for adding and removing nodes
		const arr = [this.root];

		while(arr.length) {

			// remove first element from array and set as currentNode
			const currentNode = arr.shift();

			// push the currentNode's children to the end of the array
			arr.push(...currentNode.children);

			// call the callback function on the currentNode
			fn(currentNode);
		}
	}

	// depth-first traversal
	traverseDF(fn) {

		function recursive(node) {

			fn(node);

			if(!node.children) {
				return;
			}

			for(let child of node.children) {
				recursive(child);
			}
		}

		recursive(this.root);
	}
}

 module.exports = { Tree, Node };
