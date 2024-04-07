// Problem - 1431. Kids With the Greatest Number of Candies
const kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);
  return candies.map((candies) => candies + extraCandies >= max);
};

// const kidsWithCandies = function(candies, extraCandies) {
//   const max = Math.max(...candies);
//   const res = []
//   for(let i = 0; i<candies.length;i++){
//       if(candies[i] + extraCandies >= max){
//           res.push(true)
//       }else{
//           res.push(false)
//       }
//   }
//   return res
// };
