const Node = require('./node');
const validate = require('./index');

/*
  BST for Testing:

                 10
                 |
           -------------          
           0          12
           |           |
        --------    --------   
        -1     4    11    20

*/

describe('Validate', () => {

    test('validate is function', () => {
      expect(typeof validate).toEqual('function');

    });

    const n = new Node(10);

    beforeEach(() => {
        n.insert(0);
        n.insert(12);
        n.insert(-1);
        n.insert(4);
        n.insert(11);
        n.insert(20);
    });

    test('validate recognizes a valid BST', () => {
        expect(validate(n)).toEqual(true);
    });

    test('validate recognizes an invalid positive node on the right side', () => {
        n.right.right.right = new Node(15);
        expect(validate(n)).toEqual(false);
    });

    test('validate recognizes an invalid negative node on the right side', () => {
        n.right.right.left = new Node(-15);
        expect(validate(n)).toEqual(false);
    });

    test('validate recognizes an invalid positive node on the left side', () => {
        n.left.left.left = new Node(15);
        expect(validate(n)).toEqual(false);
    });

    test('validate recognizes an invalid negative node on the left side', () => {
        n.left.left.right = new Node(-15);
        expect(validate(n)).toEqual(false);
    });
});
