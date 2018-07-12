// Pyramid
// July 12, 2018
// Joe Stowers

/*
    Goal:
    Write a function that receives a positive integer, N, and
    console log a pyramid shape with N levels using the # character.
    Make sure the pyramid has space on both the left and right sides.

    pyramid(1)
        =>     '#'

    pyramid(2)
        =>    ' # '
              '###'

    pyramid(4)
        =>  '   #   '
            '  ###  '
            ' ##### '
            '#######'
*/

function pyramid(n) {

    // calculate midpoint of pyramid
    const midpoint = Math.floor((2*n - 1) / 2);

    // iterate over rows
    for (let row = 0; row < n; row++) {

        // create level for each row
        let level = '';

        // find midpoint of pyramid,
        // then for each level, there will be that number of '#' on each
        // side of the midlevel

        for(let col = 0; col < (2*n - 1); col++){
            if(midpoint - row <= col && midpoint + row >= col){
                level += '#';
            } else {
                level += ' ';
            }
        }

        console.log(level);
    }
}

module.exports = pyramid;