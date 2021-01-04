// naive solution O(n2)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
}

let a = sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3]
let b = sumZero([-2, 0, 1, 3]); // undefined
let c = sumZero([1, 2, 3]); // undefined
let d = sumZero([-4, -3, -2, -1, 0, 1, 2, 5]); // [ -2, 2]

console.log(a);
console.log(b);
console.log(c);
console.log(d);

// refactor version
function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

let a2 = sumZero2([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3]
let b2 = sumZero2([-2, 0, 1, 3]); // undefined
let c2 = sumZero2([1, 2, 3]); // undefined
let d2 = sumZero2([-4, -3, -2, -1, 0, 1, 2, 5]); // [ -2, 2]

console.log(a2);
console.log(b2);
console.log(c2);
console.log(d2);
