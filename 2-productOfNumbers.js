// Write a function getProductsOfAllIntsExceptAtIndex() that 
// takes an array of integers and returns an array of the products.
// Do not use division in your solution.

// Solution works for 0 and negative numbers. It works in O(n) time and O(n) space complexity.

const getProductsOfAllIntsExceptAtIndex = function(numberArr) {
  if(numberArr.length < 2) {
    return "Error: not enough data";
  }

  let productsArr = [];
  let currentProduct = 1;

  // get all of the products going forward first
  for (let i = 0; i < numberArr.length; i++) {
    const num = numberArr[i];

    productsArr[i] = currentProduct;

    currentProduct *= num;
  }

  // reset currentProduct to go backwards
  currentProduct = 1;

  for (let j = numberArr.length - 1; j >= 0; j--) {
    const num = numberArr[j];

    productsArr[j] = currentProduct * productsArr[j];

    currentProduct *= num;
  }

  return productsArr;
}
