const { trips, desks, removeDuplicates } = require('./index');

describe('trips function', () => {
    test('is defined as a function', () => {
        expect(typeof trips).toEqual('function');
    });
    
    test('returns the sum of all distances traveled', () => {
        const array = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];
        expect(trips(array)).toEqual(47);
    });
});

describe('desks function', () => {
    test('is defined as a function', () => {
        expect(typeof desks).toEqual('function');
    });
    
    test('returns an object with a tally of sitting and standing desks', () => {
        const array = [
            { type: 'sitting' },
            { type: 'standing' },
            { type: 'sitting' },
            { type: 'sitting' },
            { type: 'standing' }
        ];
        expect(desks(array)).toEqual({ sitting: 3, standing: 2 });
    });
});

describe('removeDuplicates function', () => {
    test('is defined as a function', () => {
        expect(typeof removeDuplicates).toEqual('function');
    });

    test('handles an empty array as an input', () => {
        const array = [];
        expect(typeof removeDuplicates(array)).toEqual('object');
    })

    test('removes duplicate values in an array', () => {
        const array =[1, 1, 2, 3, 4, 4];
        expect(removeDuplicates(array)).toEqual([1, 2, 3, 4]);
    });
});