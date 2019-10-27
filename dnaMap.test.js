const convert = require('./dnaMap')['convert'];

// DNA tests
test('a is CGCCG', () => {
    expect(convert('a', 'DNA')).toBe('CGCCG');
});
