export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };

  const countFn = () => setCounter(counter + 1);

  element.addEventListener("click", countFn);
  setCounter(0);

  return {
    tearDown() {
      element.removeEventListener("click", countFn);
    },
  };
}
