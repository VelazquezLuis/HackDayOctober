const expectExport = require("expect")

// DNA tests
test('a is [  ]', () => {
    expect('a').toBe('[   ]');
});

test('A is [    ]', () => {
    expect('A').toBe([   ]);
});

test('a a is [      ]', () => {
    expect('a a').toBe([    ]);
});

test('cat is [      ]', () => {
    expect('cat').toBe();
});

test('Cat is [    ]', () => {
    expect('Cat').toBe([   ]);
});

//  RNA tests
test('a is [  ]', () => {
    expect('a').toBe('[   ]');
});

test('A is [    ]', () => {
    expect('A').toBe([   ]);
});

test('a a is [      ]', () => {
    expect('a a').toBe([    ]);
});

test('cat is [      ]', () => {
    expect('cat').toBe();
});

test('Cat is [    ]', () => {
    expect('Cat').toBe([   ]);
});
