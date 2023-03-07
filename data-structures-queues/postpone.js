/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const front = queue.dequeue();
  return queue.enqueue(front);
}
