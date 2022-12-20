/* exported maxValue */

function maxValue(stack) {
  let maxValue = stack.peek();

  if (stack.peek() === undefined) {
    maxValue = -Infinity;
  } else {
    while (stack.peek() !== undefined) {
      const stackTop = stack.pop();
      if (stackTop >= maxValue) {
        maxValue = stackTop;
      }
    }
  }
  return maxValue;
}
