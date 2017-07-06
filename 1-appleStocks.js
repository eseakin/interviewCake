// Suppose we could access yesterday's stock prices as an array, where:

// The indices are the time in minutes past trade opening time, which was 9:30am local time.
// The values are the price in dollars of Apple stock at that time.

// So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.

// Write an efficient function that takes stockPricesYesterday and returns the best profit 
// I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

// solution works for negative numbers as well.

const appleStocks = function(priceArr) {
  if(priceArr.length < 2) {
    return "Can't create a profit with less than 2 values"
  }

  let lowestPrice = priceArr[0];
  let biggestDifference = priceArr[1] - priceArr[0];

  for(let i = 1; i < priceArr.length; i++) {
    const price = priceArr[i];
    const difference = price - lowestPrice;

    if(price < lowestPrice) {
      lowestPrice = price;
    }

    if(difference > biggestDifference) {
      biggestDifference = difference;
    }
  }

  return biggestDifference;
}













