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
