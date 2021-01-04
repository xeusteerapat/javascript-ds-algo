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
