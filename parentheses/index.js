// Generate Parenthesis
// October 20, 2018

/*
    Given n pairs of parentheses, write a function to generate
    all combinations of well-formed parentheses.

    ()()()   // 1
    (())()   // 2 + 1
    ()(())   // 1 + 2
    ((()))   // 3
    (()())

    // need to keep a counter of open parens as build out 

    // after each (, can have ) or n-1 (
    
    
    // if counter = n, then start adding closing parens

    char        open left       closed left
    (           2               3
    ((          1               3
    (((         0               3
    
        
    // when open left = 0, start building back the parenthesis
    ((()        0               2
    ((())       0               1
 1  ((()))      0               0

    // when open = 0 and closed = 0, store the results

    // go back to where open = 1
    
    ((          1               3
    (()         1               2
    (())        1               1
    (())(       0               1
2   (())()      0               0

    // after adding a close, we have to add an open
    // go back to where open = 2
    (           2               3
    if right > left, have two options    
    ()          2               2

    // if right > left, have two options
    ()(         1               2
    ()((        0               2
    ()(()       0               1
3   ()(())      0               0

    ()(         1               2
    ()()        1               1
    ()()(       0               1
4   ()()()      0               0

    (           2               3
    ((          1               2


    // call function recursive with the current pattern,
    // and the remaining count for left and right parens
    recursive(pattern, left, right)

*/

function generateParentheses (n) {
    // let open = '(';
    // let close = ')';

    let stringTotal = 2 * n;
    let result = [];

    function recursive(string, openCount, closeCount) {

        if (openCount + closeCount === stringTotal) {
            result.push(string);
            return;
        }

        // if openCount < n
        if (openCount < n) {
            console.log('inside openCount < n');
            string += '(';
            openCount += 1;
            if (openCount < n) {
                recursive(string, openCount, closeCount);
            }
        } else {
            string += ')';
            closeCount += 1;
        }
    
        recursive(string, openCount, closeCount);

    }

    recursive('', 0, 0);

    console.log('result =', result);
    return result;
}

console.log('generateParenthesis =', generateParentheses(3));