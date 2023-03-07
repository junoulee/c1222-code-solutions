/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let max = stack.peek();

  while (stack.peek() !== undefined) {
    const value = stack.pop();

    if (value > max) {
      max = value;
    }
  }

  return max;
}
