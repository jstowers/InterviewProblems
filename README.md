# Interview Problems

This repository contains a collection of common interview problems:

- anagrams
- binary search tree (BST)
    + validate
- capitalize
- chunk
- fibonacci
    + memoize
- fizzbuzz
- islandcount
- matchbraces
- maxchar
- mergesort
- palindrome
- queue
- pyramid
- reverseint
- reversestring
- steps
- tree
    + breadth first
    + depth first
    + levelwidth

### Git Repository ###

Most of the problems in this repository were taken from the Udemy course, "_The Coding Interview Bootcamp_," by Stephen Grider.  

Grider's Github repository, including Jest tests, can be found here:
````
    https://github.com/StephenGrider/algocasts
````


### Jest Testing Framework ###

Each problem includes a test suite written with Jest.

To run the test suite for a given problem in its directory:
````
    $ jest <directory>/test.js --watch
````

Hit _Ctrl + C_ to stop the Jest test runner.


### Debugging in Node ###

To debug a problem in Node:

1.  Add a debugger statement in the code:

````
    function reverse (str) {
        let reversed = '';
        for (let char of str) {
            reversed = char + reversed;
            debugger;
        }
        return reversed;
    }
````

2.  Call the function within the code:

````
    reverse('Greetings!');
````

3.  In the console, run the following command:

````
    $ node inspect _<filename.js>_
````

4.  Node will execute the program in debug node, pausing execution on the first line of the file.  Type 'C' to continue with execution of code.  Execution will stop at the _debugger_ statement.

5.  Type _repl_ to enter REPL mode and inspect different variables.

6.  Type a variable name to see its value at that point in the execution.

7.  Type _Ctrl + C_ to leave the REPL debug session.

8.  When debugging is finished, remove the debugger statement and manual function call within the file.


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

