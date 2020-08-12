// Adding number from 1 to n
// For-loop approach

function addUpToFirst(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += i;
  }

  return answer;
}

console.log('For-loop approach --->', addUpToFirst(100));
console.log('------------------------------------------');

function addUpToFirst2(n) {
  return (n * (n + 1)) / 2;
}

console.log('Series approach --->', addUpToFirst2(100));
