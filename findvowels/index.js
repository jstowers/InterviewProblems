// Find Vowels


function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log('vowels =', vowels('Earnest Hemingway'));

function doDashes(str) {
    const matches = str.match(/--/gi);
    return matches ? matches.length : 0
}

console.log('doDashes =', doDashes('123-24-456--989'));