// Negative Number Count
// Amazon Coding Challenge - November 2016

/*
    For a sorted matrix of integers, return the total number
    of negative numbers:

    [ -4, -3, -1, 0]
    [ -5, -2,  0, 2]    =>  6
    [ -9,  0,  1, 4]

    Naive solution: iterate over both arrays in O(n*m) time.

    Optimal solution:
    Since the array is sorted from negative to positive, 
    the optimal solution would start from the right and transverse left.
    Once a negative number is found, note the index position to reveal the
    total number of negative numbers for that row.
    Then move down to the next row and one column to the left and continue.
    Once you reach the left side of the array, you will have counted all the
    negative numbers stored in the array.
*/

let array = [
    [-4, -3, -2, -1, 0],
    [-3, -2, -1,  0, 1],
    [-1,  0,  1,  2, 3],
    [ 0,  1,  2,  3, 4 ]
]

function negativeNumCount(array) {

    // check for array
    if(!Array.isArray(array)) {
        return undefined;
    }

    let count = 0;

    // i = row
    let i = 0;

    // j = col
    let j = array.length - 1;

    while (j >= 0 && i < array.length ) {

        if(array[i][j] < 0){
            count += (j+1);
            i += 1;
        } else {
            j -=1;
        }
    }

    return count;
}

module.exports = negativeNumCount;
