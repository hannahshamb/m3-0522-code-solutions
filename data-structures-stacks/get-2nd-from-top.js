/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const topValue = stack.peek();
  let secondValue;
  if (stack.peek() !== undefined) {
    stack.pop();
    secondValue = stack.peek();
    stack.push(topValue);
  }

  return secondValue;
}
