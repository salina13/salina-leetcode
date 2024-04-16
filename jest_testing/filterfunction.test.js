const filterfunction = require("./filterfunction");

test("should filter elements of the array based on the provided function", () => {
  const arr = [1, 2, 3, 4, 5]; // Define a sample array

  const isEven = (x) => x % 2 === 0; // Define a sample function to filter even numbers

  const result = filterfunction(arr, isEven); // Apply filter function to filter even numbers from the array

  expect(result).toEqual([2, 4]); // Check if the result is as expected
});
test("should return an empty array if no elements pass the filter function", () => {
  const arr = [1, 3, 5, 7, 9];

  const isEven = (x) => x % 2 === 0;

  const result = filterfunction(arr, isEven);

  expect(result).toEqual([]); // Check if the result is an empty array
});
