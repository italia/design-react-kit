/*
 * This work derives from the React Use Navscroll library
 * Released under the MIT license by Marco Liberati
 * Code: https://github.com/dej611/react-use-navscroll
 */

export const debounce = (callback: CallableFunction, wait: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: unknown[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, wait);
  };
};
