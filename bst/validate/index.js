// Validate Binary Search Tree
// June 18, 2018


function validate(node, min = null, max = null) {

	// console.log('node start =', node);
	// console.log('min =', min, "   max =", max);
	// console.log('-------------------------------');

	// base case test for LHS
	if ( max != null && node.value > max ) {
		return false;
	}

	// base case test for RHS
	if ( min != null & node.value < min ) {
		return false;
	}	

	// does node have a left value?
	if(node.left && !validate(node.left, min, node.value)){
		// console.log('inside if(node.left)');
		return false;
	}

	// does node have a right value?
	if(node.right && !validate(node.right, node.value, max)) {
		// console.log('inside if(node.right)');
		return false;
	}

	return true;
}

/*
function validate(node, min = null, max = null) {

	console.log('node start =', node);
	console.log('min =', min, "   max =", max);
	console.log('-------------------------------');

	// base case test for LHS
	if ( max != null && node.value > max ) {
		console.log('base case max =', max);
		return false;
	}

	// base case test for RHS
	if ( min != null & node.value < min ) {
		console.log('min =', min);
		return false;
	}	

	// does node have a left value?
	if(node.left != null){
		console.log('inside if(node.left)');
		//console.log('node.value =', node.value);
		// max = node.value;
		return validate(node.left, min, node.value);
	}

	// does node have a right value?
	if(node.right != null) {
		console.log('inside if(node.right)');
		return validate(node.right, node.value, max)
	}

	return true;
}
*/

module.exports = validate;
