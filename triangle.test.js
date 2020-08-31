const triangle = require('./triangle');

test('all sides are equal', () => {
    expect(triangle(3, 3, 3)).toBe("Equilateral");
});

test('sides b and c are equal', () => {
    expect(triangle(2, 3, 3)).toBe("Isosceles");
});

test('sides a and c are equal', () => {
    expect(triangle(3, 2, 3)).toBe("Isosceles");
});

test('sides a and b are equal', () => {
    expect(triangle(3, 3, 2)).toBe("Isosceles");
});

test('all sides are different', () => {
    expect(triangle(1, 2, 3)).toBe("Scalene");
});

test('side c is bigger than the sum of a and b', () => {
    expect(triangle(1, 1, 3)).toBe("Not a triangle");
});

test('side b is bigger than the sum of a and c', () => {
    expect(triangle(1, 3, 1)).toBe("Not a triangle");
});

test('side a is bigger than the sum of b and c', () => {
    expect(triangle(3, 1, 1)).toBe("Not a triangle");
});

test('side a is less than or equal to zero', () => {
    expect(triangle(0, 1, 1)).toBe("Error: A dimension is less than or equal to zero");
});

test('side b is less than or equal to zero', () => {
    expect(triangle(1, 0, 1)).toBe("Error: A dimension is less than or equal to zero");
});

test('side c is less than or equal to zero', () => {
    expect(triangle(1, 1, 0)).toBe("Error: A dimension is less than or equal to zero");
});

test('side a is not a number', () => {
    expect(triangle("a", 1, 1)).toBe("Error: A dimension is not a number");
});

test('side b is not a number', () => {
    expect(triangle(1, null, 1)).toBe("Error: A dimension is not a number");
});

test('side c is not a number', () => {
    expect(triangle(1, 1, true)).toBe("Error: A dimension is not a number");
});