/* eslint-disablt react/no-return-assign */
const useThrottle = function (func, timeout) {
  let isDebounce = false;
  return function () {
    if (isDebounce) return;
    func.apply(this, arguments);
    isDebounce = true;
    setTimeout(() => isDebounce = false, timeout);
  };
};
/* eslint-eneble react/no-return-assign */

export default useThrottle;