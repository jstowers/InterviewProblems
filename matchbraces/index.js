// Match Braces
// November 21, 2017
// rev. June 1, 2018 (added unit tests)

let chars = {
  '{' : '}',
  '<' : '>',
  '[' : ']'
}

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

module.exports = matchBraces;