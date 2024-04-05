// Problem - 1768. Merge Strings Alternately
const mergeAlternately = function (word1, word2) {
  const res = [];
  const minLength = Math.min(word1.length, word2.length);
  for (let i = 0; i < minLength; i++) {
    res.push(word1[i], word2[i]);
  }
  if (word1.length > minLength) {
    res.push(word1.substring(minLength));
  }
  if (word2.length > minLength) {
    res.push(word2.substring(minLength));
  }
  return res.join("");
};
// let word1 = "abc";
// let word2 = "pqr";
let word1 = "ab";
let word2 = "pqrs";

console.log(mergeAlternately(word1, word2));

// if don't wanna use array and then join, then use sting and concat that

// const mergeAlternately = function(word1, word2) {
//     let res = "";
//     const minLength = Math.min(word1.length, word2.length)
//     for(let i = 0; i < minLength; i++){
//         res += word1[i];
//         res += word2[i];
//     }
//     if(word1.length > minLength){
//          res += word1.substring(minLength)
//         }
//     if(word2.length > minLength){
//         res += word2.substring(minLength)
//     }
//     return res;
// };
