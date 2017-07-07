// Given an array of integers, find the highest product you can get from three of the integers.
// Array will always have 3+ items

// Solution works for negative numbers and 0. Solution runs in O(n) time and O(1) space.

const findHighestProductOfThree = function(intArr) {
  // keep track of biggest 3 positive numbers
  // keep track of lowest 2 negative numbers
  // see which makes biggest product at end

  let highestProductOfThree = intArr[0] * intArr[1] * intArr[2];

  if(intArr.length === 3) {
    return highestProductOfThree;
  }
  
  let highestProductOfTwo = intArr[0] * intArr[1];
  let lowestProductOfTwo = intArr[0] * intArr[1];

  let highest = Math.max(intArr[0], intArr[1]);
  let lowest = Math.min(intArr[0], intArr[1]);

  for (let i = 2; i < intArr.length; i++) {
    const int = intArr[i];

    highestProductOfThree = Math.max(highestProductOfThree, highestProductOfTwo * int, lowestProductOfTwo * int);
    highestProductOfTwo = Math.max(highestProductOfTwo, lowest * int, highest * int);
    lowestProductOfTwo = Math.min(lowestProductOfTwo, lowest * int, highest * int);
    highest = Math.max(highest, int);
    lowest = Math.min(lowest, int);
  }

  return highestProductOfThree;
}