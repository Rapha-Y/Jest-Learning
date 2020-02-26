const reverseString = require("./reverse-string");

test("reverseString function exists", () => {
    expect(reverseString).toBeDefined();
});

test("String reverses", () => {
    expect(reverseString("hello world!")).toEqual("!dlrow olleh");
});

test("String reverses with uppercase", () => {
    expect(reverseString("Hello World!")).toEqual("!dlrow olleh");
});