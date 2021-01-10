# Problem Solving Patterns

Here is some of them

```shell
Frequency Counter
Multiple Pointers
Sliding Window
Divide and Conquer
Dynamic Programming
Greedy Algorithms
Backtracking
And more!
```

## Frequency Counter

Normally use ```key/value```  to store collections of frequency values. Avoid using nested loop ```O(n2)```

Challenge

> Write a function called ```same```, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

examples

```javascript
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)
```

solution

```javascript
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
```

Anagram

> Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

```javascript
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
```

Anagram's solution

```javascript
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const lookUp = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    // if letter exists, increment, otherwise set to 1
    lookUp[letter] ? (lookUp[letter] += 1) : (lookUp[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];

    if (!lookUp[letter]) {
      return false;
    } else {
      lookUp[letter] -= 1;
    }
  }

  return true;
}

let a = validAnagram('', ''); // true
let b = validAnagram('aaz', 'zza'); // false
let c = validAnagram('anagram', 'nagaram'); // true
let d = validAnagram('rat', 'car'); // false
let e = validAnagram('awesome', 'awesom'); // false
let f = validAnagram('qwerty', 'qeywrt'); // true
let g = validAnagram('texttwisttime', 'timetwisttext'); // true
```

## Multiple Pointers

Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition. Very efficient for solving problems with minimal space complexity as well

> Write a function called ```sumZero``` which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

```javascript
sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined
```

if we use naive approach, we'll get ```O(n2)``` complexity

```javascript
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
}
```

refactor version, we'll get ```O(n)``` for time complexity and ```O(1)``` for space complexity

```javascript
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
```

Count unique values

> Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

```javascript
countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4

// Colt's solution
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  console.log(i + 1);
  return i + 1;
}
```
