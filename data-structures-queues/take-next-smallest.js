/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let frontValue = queue.peek();
  let nextSmallest;
  queue.dequeue();
  if (queue.peek() === undefined) {
    nextSmallest = frontValue;
    return nextSmallest;
  } else {

    let nextValue = queue.peek();
    while (nextValue !== undefined) {
      if (frontValue <= nextValue) {
        nextSmallest = frontValue;
        break;
      } else {
        queue.dequeue();
        queue.enqueue(frontValue);
        frontValue = nextValue;
        nextValue = queue.peek();
      }
    }
    return nextSmallest;
  }

}
