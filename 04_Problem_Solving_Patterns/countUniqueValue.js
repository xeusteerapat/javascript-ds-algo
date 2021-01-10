// My approach
function countUniqueValues(arr) {
  const arrObj = arr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }

    return acc;
  }, {});

  console.log(Object.keys(arrObj).length);
  return Object.keys(arrObj).length;
}

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
