/* exported isEmpty */

function isEmpty(queue) {
  let isEmpty;
  if (queue.peek() === undefined) {
    isEmpty = true;
  } else {
    isEmpty = false;
  }
  return isEmpty;
}
