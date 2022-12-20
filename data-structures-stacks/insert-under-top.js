/* exported insertUnderTop */

function insertUnderTop(stack, value) {

  const topValue = stack.peek();
  if (stack.peek() !== undefined) {
    stack.pop();
    stack.push(value);
    stack.push(topValue);
  }
  return stack;
}
