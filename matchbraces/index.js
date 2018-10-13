// Match Braces
// November 21, 2017
// rev. June 1, 2018 (added unit tests)
// rev. October 13, 2018 (added reduce function)

let chars = {
  '{' : '}',
  '<' : '>',
  '[' : ']'
}

/*
    SOLUTION #1:  Use Reduce
    use accumulator as a counter 
    -> for open {, <, [, increase counter by 1
    -> for closed }, >, ], decrease counter by 1

    if counter < 1, unbalanced -> return false
    if counter = 0, balanced -> return true
*/
    
function matchBraces(str) {

    let counter = str.split('').reduce((previous, char) => {
        if (previous < 0) { 
            return false;
        }
        if(char === '{' || char === '<' || char === '[') {
            return ++previous;
        } 
        else return --previous;
    },0);

   return counter === 0 ? true : false;
}

/*
    SOLUTION #2:  Use push/pop to add chars to storage arrays
*/

/*
function matchBraces(str) {

    // split string into array
    let array = str.split('');

    // storage arrays
    let leftBrace = [];
    let rightBrace = [];

    for (let i = 0; i < array.length; i++) {
        for(key in chars) {
            if(array[i] === key) {
                leftBrace.push(array[i]);
            } else if (array[i] === chars[key]) {
                rightBrace.push(array[i]);
                if(leftBrace.length) {
                    let popLeft = leftBrace.pop();
                    if(popLeft != key) {
                       return false;
                    } else break;
                } else if (leftBrace.length === 0) {
                    return false;
                }
            }
        }
    }
    return true;
}
*/

module.exports = matchBraces;
