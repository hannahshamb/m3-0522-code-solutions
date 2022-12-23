/* exported postpone */

function postpone(queue) {
  if (queue.peek() !== undefined) {
    const frontValue = queue.peek();
    queue.dequeue();
    queue.enqueue(frontValue);
  }
}
