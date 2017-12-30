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


// stringClean() uses regex to remove spaces and punctuation
// \w matches any alphanumeric character including the underscore; equivalent to [A-Za-z0-9_]
function stringClean(string) {
    return string.replace(/[^\w]/g,'').toLowerCase();
}

// charMap() returns a character map object: { a:1, d:3, m:1 }
function charMap(array) {
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

function anagrams(stringA, stringB) {
    stringA = stringClean(stringA);
    stringB = stringClean(stringB);

    // return false if string lengths do not equal
    if (stringA.length != stringB.length) {
        return false;
    }

    // for each string, use reduce to build a character map
    let charMapA = charMap(stringA.split(''));
    let charMapB = charMap(stringB.split(''));

    for (keyA in charMapA) {
        for (keyB in charMapB) {
            if (keyB === keyA) {
                if (charMapB[keyB] != charMapA[keyA]) {
                    return false;
                }
            }
        }
    }

    return true;
}

module.exports = anagrams;
