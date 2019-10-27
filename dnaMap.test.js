import convert from './dnaMap';

convert.log = jest.fn.mockReturnValue('test')

// DNA tests
test('a is cgccg', () => {
    expect(convert('a', 'DNA')).toMatch('cgccg');
});
