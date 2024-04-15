// Problem - 392. Is Subsequence
const isSubsequence = function (s, t) {
  let l = 0;
  let r = 0;
  for (let r = 0; r < t.length; r++) {
    if (s[l] == t[r]) {
      l++;
    }
  }
  return l == s.length;
};
