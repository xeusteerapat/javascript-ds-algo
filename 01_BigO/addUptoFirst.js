// Adding number from 1 to n
// For-loop approach O(n)

function addUpToFirst(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += i;
  }

  return answer;
}

console.log('For-loop approach --->', addUpToFirst(100));
console.log('------------------------------------------');

// Add up to second approch O(1)
function addUpToSecond(n) {
  return (n * (n + 1)) / 2;
}

console.log('addUpToSecond approach --->', addUpToSecond(100));
