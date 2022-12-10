/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let frontValue = queue.peek();
  const count = index;
  let indexValue;

  if (frontValue === undefined) {
    return frontValue;
  }

  for (let i = 0; i < count; i++) {
    indexValue = queue.peek();
    queue.dequeue();

    if (queue.peek() === undefined) {
      frontValue = indexValue;
      break;
    }
    queue.enqueue(indexValue);
  }

  if (queue.peek() !== undefined) {
    frontValue = queue.peek();
  }
  queue.dequeue();

  return frontValue;
}
