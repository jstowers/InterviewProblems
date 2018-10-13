const { trips, desks, removeDuplicates } = require('./index');

test('trips is a function', () => {
    expect(typeof trips).toEqual('function');
});

test('trips returns the sum of all distances traveled', () => {
    const array = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];
    expect(trips(array)).toEqual(47);
});

test('desks is a function', () => {
    expect(typeof desks).toEqual('function');
});

test('desks returns an object with a tally of sitting and standing desks', () => {
    const array = [
        { type: 'sitting' },
        { type: 'standing' },
        { type: 'sitting' },
        { type: 'sitting' },
        { type: 'standing' }
    ];
    expect(desks(array)).toEqual({ sitting: 3, standing: 2 });
});

test('removeDuplicates is a function', () => {
    expect(typeof removeDuplicates).toEqual('function');
});

test('removeDuplicates removes duplicate values in an array', () => {
    const array =[1, 1, 2, 3, 4, 4];
    expect(removeDuplicates(array)).toEqual([1, 2, 3, 4]);
});