const mapfunction = require("./mapfunction");

test("should apply the provided function to each element in the array", () => {
  // Define a sample array
  const arr = [1, 2, 3, 4, 5];

  // Define a sample function to be applied to each element
  const double = (x) => x * 2;

  // Apply mapfunction to double each element in the array
  const result = mapfunction(arr, double);

  // Check if the result is as expected
  expect(result).toEqual([2, 4, 6, 8, 10]);
});

test("should handle an empty array", () => {
  // Define an empty array
  const arr = [];

  // Define a sample function
  const fn = (x) => x * 2;

  // Apply mapfunction to an empty array
  const result = mapfunction(arr, fn);

  // Check if the result is an empty array
  expect(result).toEqual([]);
});

test("should handle an array with one element", () => {
  // Define an array with one element
  const arr = [5];

  // Define a sample function
  const fn = (x) => x * 2;

  // Apply mapfunction to an array with one element
  const result = mapfunction(arr, fn);

  // Check if the result is as expected
  expect(result).toEqual([10]);
});
