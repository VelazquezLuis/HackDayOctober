const convert = require('./dnaMap')['convert'];

// DNA tests
it('should return a as cgccg', () => {
    expect(convert('a', 'DNA')).toBe('cgccg');
});
