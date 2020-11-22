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

  // my approach
  let obj2 = {};
  for (let char of str) {
    if (obj2[char]) {
      obj2[char]++;
    } else {
      obj2[char] = 1;
    }
  }

  // refactor
  let result = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }

  // return object
  return result;
}

// using helper function rather than RegEx
function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);

  if (
    !(code > 47 && code < 58) && // 0-9
    !(code > 64 && code < 91) && // A-Z
    !(code > 96 && code < 123) // a-z
  ) {
    return false;
  }

  return true;
}

let a = charCount('ht, there!');
let b = charCount('hello');
console.log(b);
let c = charCount('Your PIN number is 1234!');
console.log(c);
