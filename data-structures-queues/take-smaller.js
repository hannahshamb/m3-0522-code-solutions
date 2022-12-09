/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return queue.peek();
  }

  let smallerValue;
  const frontValue = queue.peek();
  queue.dequeue();
  const secondValue = queue.peek();

  if (secondValue === undefined) {
    smallerValue = frontValue;
  } else {
    queue.dequeue();
    if (frontValue < secondValue) {
      smallerValue = frontValue;
      queue.enqueue(secondValue);
    } else {
      smallerValue = secondValue;
      queue.enqueue(frontValue);
    }
  }

  return smallerValue;
}
