import React, { useState, useEffect } from 'react';

// const useDebounce = (func, timeout) => {
//   let timeoutId;
//   return function () {
//     const context = this;
//     const args = arguments;
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       func.apply(context, args);
//     }, timeout);
//   };
// };
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay],
  );
  return debouncedValue;
}

export default useDebounce;