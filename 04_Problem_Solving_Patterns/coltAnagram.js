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

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
