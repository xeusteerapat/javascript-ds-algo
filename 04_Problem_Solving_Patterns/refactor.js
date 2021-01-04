// O(n)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let value of arr1) {
    freqCounter1[value] = (freqCounter1[value] || 0) + 1;
  }

  for (let value of arr2) {
    freqCounter2[value] = (freqCounter2[value] || 0) + 1;
  }

  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) return false;

    if (freqCounter2[key ** 2] !== freqCounter1[key]) return false;
  }

  return true;
}

let a1 = same([1, 2, 3], [4, 1, 9]); // true
let b1 = same([1, 2, 3], [1, 9]); // false
let c1 = same([1, 2, 1], [4, 4, 1]); // false
let d1 = same([1, 2, 3, 4], [9, 1, 4, 16]); // true

console.log(a1);
console.log(b1);
console.log(c1);
console.log(d1);
