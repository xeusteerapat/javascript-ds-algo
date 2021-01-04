// My approach (I know, it super BAD)
function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let arrSqr = [];
  for (let i = 0; i < arr1.length; i++) {
    arrSqr.push(arr1[i] ** 2);
  }

  return arr2
    .sort((a, b) => a - b)
    .every((num, i) => num === arrSqr.sort((a, b) => a - b)[i]);
}

let a = same1([1, 2, 3], [4, 1, 9]); // true
let b = same1([1, 2, 3], [1, 9]); // false
let c = same1([1, 2, 1], [4, 4, 1]);

// Colt's naive approach
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
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
