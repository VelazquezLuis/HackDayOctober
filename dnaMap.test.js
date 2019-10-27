const expectExport = require("expect")


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

