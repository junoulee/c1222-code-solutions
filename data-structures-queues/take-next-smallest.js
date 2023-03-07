/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let nextSmallest = queue.dequeue();
  while (nextSmallest > queue.peek()) {
    queue.enqueue(nextSmallest);
    nextSmallest = queue.dequeue();
  }
  return nextSmallest;
}
