const negativeNumCount = require('./index.js');

test('negativeNumCount function is defined', ()=> {
    expect(negativeNumCount).toBeDefined();
});

test('returns a number', () => {
	expect(typeof negativeNumCount([])).toEqual('number');
});

test('returns 0 for an empty array', () => {
    expect(negativeNumCount([])).toEqual(0);
});

test('returns undefined if an array is not passed to the function', () => {
    expect(negativeNumCount(2)).toEqual(undefined);
});

test('returns 8 for the specified array', () => {
    let array = [
        [-4, -3, -2, -1, 0],
        [-3, -2, -1,  0, 1],
        [-1,  0,  1,  2, 3],
        [ 0,  1,  2,  3, 4 ]
    ];
    expect(negativeNumCount(array)).toEqual(8);
});
