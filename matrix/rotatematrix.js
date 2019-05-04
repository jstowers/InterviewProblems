// Rotate Matrix
// May 4, 2019

/*
	Write a function that accepts an N x N matrix and rotates it 90 degrees clockwise

	matrix(4)	=>	[ [  1,  2,  3,  4 ],      =>  [ [ 13,  9, 5, 1 ]
					  [  5,  6,  7,  8 ],            [ 14, 10, 6, 2 ],
					  [  9, 10, 11, 12 ],            [ 15, 11, 7, 3 ],
					  [ 13, 14, 15, 16 ] ]           [ 16, 12, 8, 4 ] ]
*/

let array = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

function rotateMatrix(array) {

    // check on NxN matrix
    if (array.length === 0 || array.length != array[0].length) {
        return false;
    }

    let layer = 0;
    let n = array.length;

    // iterate into matrix, layer by layer
    while (layer < n/2) {
        console.log('LAYER ', layer);

        // first and last positions in each layer
        let first = layer;
        let last = n - 1 - layer;

        for(let i = first; i < last; i++) {
            console.log('i =', i);
            console.log(array);
            
            // set offset for left column and bottom row
            let offset = i - first;

        // Assign matrix values
            let top = array[first][i];
            console.log('top =', top);

            let right = array[i][last];
            console.log('right =', right);

            let bottom = array[last][last-offset];
            console.log('bottom =', bottom);

            let left = array[last-offset][first];
            console.log('left =', left);

        // Rotate matrix values

            // left-> top
            array[first][i] = left;

            // bottom -> left
            array[last-offset][first] = bottom;

            // right-> bottom
            array[last][last-offset] = right;

            // top -> right
            array[i][last] = top;

            console.log(array);
            console.log('-------------------------');
        }
        layer += 1;
    }
    return array;
}

console.log('rotateMatrix =', rotateMatrix(array));


