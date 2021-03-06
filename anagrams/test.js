const anagrams = require('./index.js');

test('anagrams function exists', () => {
    expect(typeof anagrams).toEqual('function');
});

test('"admirer" is an anagram of "married"', () => {
    expect(anagrams('admirer', 'married')).toBeTruthy();
});

test('"CREATIVE" is an anagram of "Reactive"', () => {
    expect(anagrams('CREATIVE', 'Reactive')).toBeTruthy();
});

test('"Eleven plus two" is an anagram of "Twelve plus one"', () => {
    expect(anagrams('Eleven plus two', 'Twelve plus one')).toBeTruthy();
});

test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
    expect(anagrams('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
});

test('"One One" is not an anagram of "Two two two"', () => {
    expect(anagrams('One One', 'Two two two')).toBeFalsy();
});

test('"One one" is not an anagram of "One one c"', () => {
    expect(anagrams('One one', 'One one c')).toBeFalsy();
});

test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
    expect(
        anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')
    ).toBeFalsy();
});
