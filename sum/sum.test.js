const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum.sum(1, 2)).toBe(3);
});
test("adds 2 - 1 to equal 1", () => {
  expect(sum.subtract(2, 1)).toBe(1);
});
test("adds 2 * 1 to equal 2", () => {
  expect(sum.multiply(2, 1)).toBe(2);
});
test("divise", () => {
  expect(sum.divide(2, 1)).toBe(2);
});
test("divise", () => {
  expect(()=> sum.divide(2, 0)).toThrow();
});
