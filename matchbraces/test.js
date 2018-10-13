const matchBraces = require('./index');

test('matchBraces is defined', () => {
	expect(matchBraces).toBeDefined()
});

test('handles <>', () => {
	expect(matchBraces('<>')).toBe(true)
});

test('handles {}', () => {
	expect(matchBraces('{}')).toBe(true)
});

test('handles []', () => {
	expect(matchBraces('[]')).toBe(true)
});

test('returns false for }{', () => {
	expect(matchBraces('}{')).toBe(false)
});

test('returns true for {}{}', () => {
	expect(matchBraces('{}{}')).toBe(true)
});

test('returns true for {<[]>}', () => {
	expect(matchBraces('{<[]>}')).toBe(true)
});

test('returns false for {<[>}', () => {
	expect(matchBraces('{<[>}')).toBe(false)
});

test('returns true for {{{}{}}{}{}}', () => {
	expect(matchBraces('{{{}{}}{}{}}')).toBe(true)
});

test('returns false for {{{}}{}}{{{{{}}}}}}{', () => {
	expect(matchBraces('{{{}}{}}{{{{{}}}}}}{')).toBe(false);
});

test('returns false for {{{{{{{{}}}}}{}}', () => {
	expect(matchBraces('{{{{{{{{}}}}}{}}')).toBe(false);
});
