/* exported countValues */

function countValues(stack) {
  let numValues = 0;

  while (stack.peek() !== undefined) {
    stack.pop();
    numValues++;
  }
  return numValues;
}
