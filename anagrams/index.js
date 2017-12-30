// Anagrams
// December 22, 2017

/*
  GOAL: Check to see if two strings are anagrams of each other.

  An anagram is a string that contains the same characters in the same quantity
  as another string.

  Only consider characters, not spaces or punctuation.  Count capital letters
  the same as lowercase letters.

  EXAMPLES:
    anagrams('rail safety', 'fairy tales') => true
    anagrams('RAIL! SAFETY!', 'fairy tales') => true
*/

//  Solution #1 => uses JavaScript array sort() method
function anagrams(stringA, stringB) {
    stringA = cleanString(stringA).split('').sort().join('');
    stringB = cleanString(stringB).split('').sort().join('');

    if (stringA === stringB) {
        return true;
    } else return false;
}


/*  Solution #2 => uses a character map
function anagrams(stringA, stringB) {
    stringA = cleanString(stringA);
    stringB = cleanString(stringB);

    // return false if string lengths do not equal
    if (stringA.length != stringB.length) {
        return false;
    }

    // for each string, use reduce to build a character map
    let charMapA = buildCharMap(stringA.split(''));
    let charMapB = buildCharMap(stringB.split(''));

    // loop through charMap and compare character counts
    for (char in charMapA) {
        if (charMapA[char] != charMapB[char]) {
            return false;
        }
    }

    return true;
}

*/

// cleanString() uses regex to remove spaces and punctuation
// \w matches any alphanumeric character including the underscore;
// equivalent to [A-Za-z0-9_]
function cleanString(string) {
    return string.replace(/[^\w]/g,'').toLowerCase();
}

// buildCharMap() returns a character map object: { a:1, d:3, m:1 }
function buildCharMap(array) {
    return array.reduce((accum, element) => {
        // if char not in accum {}, adds char:1
        if (typeof accum[element] == 'undefined') {
            accum[element] = 1;
        } else {
            accum[element] += 1;
        }
        return accum;
    },{});
}

module.exports = anagrams;
