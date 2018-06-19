// Binary Search Tree
// Node Class

class Node {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {

        if ( value < this.value ) {
            // does current node have a left value?
            if(!this.left){
                this.left = new Node(value);
            } else {
                this.left.insert(value);
            }
        } else if ( value > this.value ) {
            // does current node have a right value?
            if(!this.right) {
                this.right = new Node(value);
            } else {
                this.right.insert(value);
            }
        } 
    }
}

module.exports = Node;