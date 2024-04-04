var createCounter = function (n) {
  let currentCounter = n - 1;
  return function () {
    currentCounter += 1;
    return currentCounter;
  };
};
