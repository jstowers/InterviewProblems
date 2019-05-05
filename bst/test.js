const Node = require('./index');

describe('Binary Search Tree', () => {

	test('Node contains a constructor', () => {
	    expect(typeof Node.prototype.constructor).toEqual('function');
	});

	test('Node can insert correctly', () => {
		const node = new Node(10);
		node.insert(8);
		node.insert(15);
		node.insert(17);
		node.insert(2);

		expect(node.left.value).toEqual(8);
		expect(node.right.value).toEqual(15);
		expect(node.right.right.value).toEqual(17);
		expect(node.left.left.value).toEqual(2);
	});

	test('Contains returns node with the same data', () => {
		const node = new Node(10);
		node.insert(5);
		node.insert(15);
		node.insert(20);
		node.insert(0);
		node.insert(-5);
		node.insert(3);

		const three = node.left.left.right;
		expect(node.contains(3)).toEqual(three);
	});

	test('Contains returns null when the value does not exist', () => {
		const node = new Node(15);
		node.insert(4);
		node.insert(2);
		node.insert(17);
		node.insert(21);

		expect(node.contains(22)).toEqual(null);
	});

});