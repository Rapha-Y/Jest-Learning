const functions = require("./functions");

/*beforeEach(() => initDatabase());
afterEach(() => closeDatabase());*/

/*beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const initDatabase = () => console.log("Database initialized");
const closeDatabase = () => console.log("Database closed");*/

const nameCheck = () => console.log("Checking name");

describe("Check Names", () => {
    beforeEach(() => nameCheck());
    test("User is Chie", () => {
        const user = "Chie";
        expect(user).toBe("Chie");
    });

    test("User is Hana", () => {
        const user = "Hana";
        expect(user).toBe("Hana");
    });
});

//sum section
test("Adds 2 + 2 to equal 4", () => {
    expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to not equal 5", () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

//type section
test("Should be null", () => {
    expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

//user section
test("User should be Ferdinand Aegir", () => {
    expect(functions.createUser()).toEqual({
        firstName: "Ferdinand",
        lastName: "Aegir"
    });
});

//comparison section
test("Should be over 500", () => {
    const num1 = 249;
    const num2 = 249;
    expect(num1 + num2).toBeLessThan(500);
});

//regex section
test("There's no I in us", () => {
    expect("is").not.toMatch(/I/);
});

//fruit section
test("Tomato should be in fruits", () => {
    fruits = ["Melon", "Apple", "Tomato"];
    expect(fruits).toContain("Tomato");
});

//promise 
/*test("User fetched name should be Leanne Graham", () => {
    expect.assertions(1);
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual("Leanne Graham");
    });
});*/

//async await
test("User fetched name should be Leanne Graham", async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual("Leanne Graham");
});