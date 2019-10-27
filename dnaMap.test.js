const convert = ('/dnaMap');

// DNA tests
test('a is ', () => {
    expect('a').toMatch('');
});

test('A is ', () => {
    expect('A').toMatch();
});

test('a a is ', () => {
    expect('a a').toMatch('');
});

test('cat is ', () => {
    expect('cat').toMatch();
});

test('Cat is ', () => {
    expect('Cat').toMatch();
});

//  RNA tests
test('a is ', () => {
    expect('a').toMatch('');
});

test('A is ', () => {
    expect('A').toMatch();
});

test('a a is ', () => {
    expect('a a').toMatch();
});

test('cat is ', () => {
    expect('cat').toMatch();
});

test('Cat is ', () => {
    expect('Cat').toMatch();
});
