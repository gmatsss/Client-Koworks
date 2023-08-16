import { useRef } from "react";

function useDebounce(callback, delay) {
  const lastCallRef = useRef(null);

  return (...args) => {
    if (lastCallRef.current) {
      clearTimeout(lastCallRef.current);
    }

    lastCallRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

export default useDebounce;
