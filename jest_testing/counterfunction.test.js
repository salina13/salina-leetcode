const counterfunction = require("./counterfunction");

describe("counterfunction", () => {
  test("should return a function that increments and returns the counter value", () => {
    const counter = counterfunction(0);
    expect(counter()).toBe(0); // initial value
    expect(counter()).toBe(1); // after first call
    expect(counter()).toBe(2); // after second call
  });
  
  test("should handle negative initial values", () => {
    const counter = counterfunction(-5);
    expect(counter()).toBe(-5);
    expect(counter()).toBe(-4);
    expect(counter()).toBe(-3);
  });
});
