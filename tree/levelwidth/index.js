// Level Width
// Sunday, December 3, 2017


/*
	INSTRUCTIONS:

	Given the root Node of a tree, return an array where each element is the width
	of the tree at each level.

	EXAMPLE:

		   0 
		 / | \
		1  2  3
		| 	  |
		4     5

	ANSWER: 

		[1, 3, 2]

	HINT:

		If you see "width" in the problem, think breadth-first traversal.

*/

function levelWidth(root) {

	let counters = [0];

	// 's' signifies stopper, the end of a level
	let storage = [root, 's']; 

	
	while(storage.length > 1) {

		const currentNode = storage.shift();

		// reached end of row, so start a new counter at 0
		// and put a stopper at the end of the storage array
		if(currentNode === 's') {
			storage.push('s');
			counters.push(0);
		}

		else {
			storage.push(...currentNode.children);
			counters[counters.length-1]++;
		}
	}

	return counters;

}

module.exports = levelWidth;