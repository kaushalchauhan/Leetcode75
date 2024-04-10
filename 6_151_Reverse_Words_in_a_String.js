// Problem - 151. Reverse Words in a String
const reverseWords = function (s) {
  let l = 0;
  let r = s.length - 1;
  s = s
    .trim()
    .split(" ")
    .filter((word) => word !== "");
  while (l <= r) {
    [s[l], s[r]] = [s[r], s[l]];
    l++;
    r--;
  }
  return s.join(" ").trim();
};
