/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) {
    return queue.peek();
  }

  const frontValue = queue.peek();
  queue.dequeue();
  let secondValue = queue.peek();
  if (secondValue === undefined) {
    secondValue = frontValue;
  }
  queue.dequeue();
  queue.enqueue(frontValue);

  return secondValue;
}
