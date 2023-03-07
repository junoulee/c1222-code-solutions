/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const frontOne = queue.dequeue();
  queue.enqueue(frontOne);
  const frontTwo = queue.dequeue();
  return frontTwo;

}
