/* exported getLength */

function getLength(list) {
  let count = 1;
  const originalList = list.next;

  while (list.next !== null) {
    count++;
    list.next = list.next.next;
  }
  list.next = originalList;

  return count;
}
