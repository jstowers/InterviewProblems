const T = require('./index');
const Node = T.Node;
const Tree = T.Tree;

describe('Node', () => {

    test('Node includes a constructor function', () => {
        expect(typeof Node.prototype.constructor).toEqual('function');
    });

    test('Node has data and children properties', () => {
        const n = new Node('a');
        expect(n.data).toEqual('a');
        expect(n.children.length).toEqual(0);
    });

    test('Node can add children', () => {
        const n = new Node('a');
        n.add('b');
        expect(n.children.length).toEqual(1);
        expect(n.children[0].children).toEqual([]);
    });

    test('Node can remove children', () => {
        const n = new Node('a');
        n.add('b');
        expect(n.children.length).toEqual(1);
        n.remove('b');
        expect(n.children.length).toEqual(0);
    });
});

describe('Tree', () => {

    test('Tree includes a constructor function', () => {
        expect(typeof Tree.prototype.constructor).toEqual('function');
    });

    test('Tree starts empty', () => {
        const t = new Tree();
        expect(t.root).toEqual(null);
    });

    test('Tree can traverse breadth-first', () => {
        const letters = [];
        const t = new Tree();
        t.root = new Node('a');
        t.root.add('b');
        t.root.add('c');
        t.root.children[0].add('d');

        t.traverseBF(node => {
          letters.push(node.data);
        });

        expect(letters).toEqual(['a', 'b', 'c', 'd']);
    });

    test('Tree can traverse depth-first', () => {
        const letters = [];
        const t = new Tree();
        t.root = new Node('a');
        t.root.add('b');
        t.root.add('d');
        t.root.children[0].add('c');

        t.traverseDF(node => {
          letters.push(node.data);
        });

        expect(letters).toEqual(['a', 'b', 'c', 'd']);
    });
});
