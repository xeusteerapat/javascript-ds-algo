// My approach

function makeObj(str) {
  return str
    .split('')
    .sort()
    .reduce((acc, curr) => {
      if (acc[curr]) {
        acc[curr] += 1;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {});
}

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const strObj1 = makeObj(str1);
  const strObj2 = makeObj(str2);

  return JSON.stringify(strObj1) === JSON.stringify(strObj2);
}

let a = validAnagram('', ''); // true
let b = validAnagram('aaz', 'zza'); // false
let c = validAnagram('anagram', 'nagaram'); // true
let d = validAnagram('rat', 'car'); // false
let e = validAnagram('awesome', 'awesom'); // false
let f = validAnagram('qwerty', 'qeywrt'); // true
let g = validAnagram('texttwisttime', 'timetwisttext'); // true

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
