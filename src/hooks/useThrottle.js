const useThrottle = function (func, timeout) {
  let isDebounce = false;
  return function () {
    if (isDebounce) return;
    func.apply(this, arguments);
    isDebounce = true;
    setTimeout(() => isDebounce = false, timeout);
  };
};

export default useThrottle;