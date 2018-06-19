// Validate Binary Search Tree
// June 18, 2018

function validate(node, min = null, max = null) {

	// base case test for LHS
	if ( max !== null && node.value > max ) {
		return false;
	}

	// base case test for RHS
	if ( min !== null & node.value < min ) {
		return false;
	}	

	// does node have a left value?
	if(node.left && !validate(node.left, min, node.value)){
		return false;
	}

	// does node have a right value?
	if(node.right && !validate(node.right, node.value, max)) {
		return false;
	}

	return true;
}

module.exports = validate;
