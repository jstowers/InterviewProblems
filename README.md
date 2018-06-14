# Interview Problems

This repository contains a collection of common interview problems:

- anagrams
- chunk
- fibonacci
- fizzbuzz
- islandcount
- matchbraces
- maxchar
- palindrome
- queue
- reverseint
- tree
    + breadth first
    + depth first
    + levelwidth

December 2, 2017
- Palindrome
- Array Chunk

### Jest Testing Framework ###
Each problem includes a test suite written with Jest.

To run the test suite for a given problem in its directory:
````
    $ jest <directory>/test.js --watch
````

Hit Ctrl + C to stop the Jest test runner.


### Git Rebase ###

Used git rebase to pull the changes from origin and rewind the HEAD:
````
    git pull -r origin master
````


Tree Data Structure

    Traversal
        Iterating through the elements (nodes) of a tree.

````    
Types
    1.  Breadth-First Traversal

    Start at top of tree (root) and move across from left to right. Then move down to the next level and repeat.
    
    2.  Depth-First Traversal

    Start at top of tree and move down the left-hand branch to the bottom, then back up and down. Try to reach the bottom of tree as fast as possible.
````

