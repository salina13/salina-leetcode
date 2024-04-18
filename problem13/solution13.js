var cancellable = function (fn, args, t) {
  let timeoutId;

  const executeFn = () => {
    clearTimeout(timeoutId);
    return fn(...args);
  };

  timeoutId = setTimeout(executeFn, t);

  const cancelFn = () => {
    clearTimeout(timeoutId);
  };
  return cancelFn;
};
