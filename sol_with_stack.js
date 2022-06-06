/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (heights) {
  let maxHeight = 0;
  let trapStack = [];
  let i = 0;
  let volume = 0;
  while (i <= heights.length - 1) {
    if (i === 0) {
      // first element
      maxHeight = heights[i];
    } else if (i === heights.length - 1 && trapStack.length > 0) {
      //last element
      let minValue = Math.min(heights[i], maxHeight);
      volume = popStackAndUpdateVolume(trapStack, minValue, volume);
      maxHeight = heights[i];
    } else if (heights[i] < maxHeight) {
      trapStack = addToStack(trapStack, heights[i]);
    } else if (heights[i] > maxHeight && trapStack.length === 0) {
      maxHeight = heights[i];
    } else if (heights[i] >= maxHeight && trapStack.length > 0) {
      let minValue = Math.min(heights[i], maxHeight);
      volume = popStackAndUpdateVolume(trapStack, minValue, volume);
      maxHeight = heights[i];
    }
    i++;
  }
  return volume;
};

function addToStack(stack, value) {
  stack.push(value);
  return stack;
}

function popStackAndUpdateVolume(stack, max, volume) {
  let updatedMax = max;
  while (stack.length !== 0) {
    let popElement = stack.pop();

    updatedMax = Math.max(updatedMax, popElement);
    if (popElement < updatedMax) {
      volume = volume + (updatedMax - popElement);
    }
  }
  return volume;
}

let heights = [5, 5, 1, 7, 1, 1, 5, 2, 7, 6];
console.log(trap(heights));
