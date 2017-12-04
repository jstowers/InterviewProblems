// Fibonacci Series
// Joseph Stowers
// December 3, 2017

/*
	GOAL:  Print out the n-th entry in the fibonacci series.

	The Fibonacci series is an ordering of numbers where
	each number is the sum of the preceeding two.
	
	For example, the sequence [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
	forms the first ten entries of the Fibonacci series.

	EXAMPLE:
	  fib(4) === 3

*/


// Recursive Solution
function fib(n) {

	// base case
	if (n < 2) {
		return n;
	}

	return(fib(n-2) + fib(n-1));

}


/*
// Iterative Solution
function fib(n) {

	const result = [0, 1];

	for (let i = 2; i <= n; i++) {
		result.push(result[i-1] + result[i-2])
	}

	return result[n];
}
*/

// Time Complexity
// As n increases by 1, we have to do one more calculation
// Linear runtime => O(n)

module.exports = fib;