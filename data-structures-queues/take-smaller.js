/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  const frontOne = queue.dequeue();
  const frontTwo = queue.dequeue();

  if (frontOne < frontTwo || frontOne === frontTwo) {
    queue.enqueue(frontTwo);
  }

  if (frontOne > frontTwo) {
    queue.enqueue(frontOne);
    return frontTwo;
  }
  return frontOne;
}
