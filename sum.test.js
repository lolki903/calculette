const z = require("./sum");

test("test isValid", () => {
  expect(() => z.isValide("", "Doe", 25, "john.doe@example.com")).toThrow();
});
test("test lastname", () => {
  expect(() => z.name("")).toThrow();
});
test("test firstname", () => {
  expect(() => z.firstname("")).toThrow();
});
test("test age", () => {
  expect(() => z.age(12)).toThrow();
});
test("test email", () => {
  expect(() => z.email("john.doe@example")).toThrow();
});
test('should first', () => { 
    expect(z.name('john')).toBe('john');
 })
    test('should last', () => {
        expect(z.firstname('doe')).toBe('doe');
    }
    )
    test('should age', () => {
        expect(z.age(25)).toBe(25);
    }
    )
    test('should email', () => {
        expect(z.email('de@gmail.com')).toBe('de@gmail.com');
    }
    )