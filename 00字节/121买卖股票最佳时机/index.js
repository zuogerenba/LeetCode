/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0;
  let minPrice = prices[0]
  for(let i=1;i<prices.length;i++) {
    if(minPrice>prices[i]) {
      minPrice = prices[i]
    }else {
      max = Math.max(max, prices[i] - minPrice)
    }
  }
  return max;
};

// 
var maxProfit = function(prices) {
  let max = 0;
  let prevMin = prices[0];
  for(let i =1;i<prices.length;i++) {
      if(prevMin < prices[i]) {
          max = Math.max(max, prices[i] - prevMin);
      }
      prevMin = Math.min(prevMin, prices[i])
  }
  return max;
};

console.log(maxProfit([7,1,5,3,6,4]))