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


// --------------------------------------------------------
// 					Iterative Solution
// --------------------------------------------------------

/*
function fib(n) {

	const result = [0, 1];

	for (let i = 2; i <= n; i++) {
		result.push(result[i-1] + result[i-2])
	}

	return result[n];
}
*/

/*
	Time Complexity:
	Linear time O(n) => as n increases by 1, we have to do one more calculation.
*/


// --------------------------------------------------------
// 					Recursive Solution
// --------------------------------------------------------

function fib(n) {

	// base case
	if (n < 2) {
		return n;
	}

	return (fib(n-2) + fib(n-1));
}

/*
	Time Complexity:
	Exponential time => for each additional number in the series, we
	add a significant number of function calls.
*/

/*

	Can we improve the runtime of this recursive algorithm?
	
	YES.  Memoization!!

	For instance, for fib(6), the function fib(3) is called twice.  
	What if we save the value of fib(3) when it is called the first time,
	so when it is called again, we just return the pre-computed value?
	
	Memoization - store the arguments of a function call along with the result.
	If the function is called again with the same arguments, return pre-computed
	result instead of running the function again.

	calling a function with a function and returning a function:

		slowFib ==> memoize ==> turbo-charged Fib
*/

// 	memoize()
// 	receives a slow function, fn, and returns a newer, faster version
function memoize(fn) {

	// storage object that holds all previous
	// calls to fn() and their respective results
	const cache = {};

	// return super-charged function
	// ...args => don't know how many arguments will be
	// sent to this function, but take them and put in an array []
	return function(...args) {
		if (cache[args]) {
			return cache[args];
		}

		// never called that function with those arguments before
		const result = fn.apply(this, args);
		cache[args] = result;
		
		// console.log('cache =', cache);
		return result;
	}
}

fib = memoize(fib);

module.exports = fib;