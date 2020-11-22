function charCount(str) {
  // Step by Step

  // 1. create an object
  // 2. loop over string for each character
  // if the char is a number/letter AND a key ib obj, add to the count
  // if the char is a number/letter AND not in object, add set value to 1

  // Colt's approach
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();

    if (obj[char] > 0) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }

  let result = {};
  for (let s of str) {
    if (result[s]) {
      result[s]++;
    } else {
      result[s] = 1;
    }
  }

  // return object
  return obj;
}

let a = charCount('ht, there!');
let b = charCount('hello');
console.log(b);
let c = charCount('Your PIN number is 1234!');
console.log(c);
