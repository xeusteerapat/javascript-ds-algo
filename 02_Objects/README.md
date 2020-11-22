# Object and Array

- Understand how objects and arrays work, through Big O
- Explain why adding elements to the beginning of an array is costly
- Compare and contrast the runtime for arrays and objects, as well as built-in methods

## Objects

- Unordered, Keys-Values pairs
- When you don't need order
- When you need fast access/insert and remove

### Big-O of Objects

Insertion - O(1)  
Removal - O(1)  
Searching - O(n)  
Accessing - O(1)

### Big-O of Objects's Method

```Object.keys``` - O(n)  
```Object.values``` - O(n)  
```Object.entries``` - O(n)  
```hasOwnProperty``` - O(1)  

## Array

Ordered lists, values can be mixed.

### Big-O of Array

Insertion - It depends...  
Removal - It depends...  
Searching - O(n)  
Accessing - O(1)

By inserting element at the beginning of the array is inefficient, because we need to re-ordered index of the existing elements of the array (this is O(n)). And also removing from the beginning.

### Big-O of Array's Method

```Array.push``` - O(1)  
```Array.pop``` - O(1)  
```Array.shift``` - O(n)  
```Array.unshift``` - O(n)  
```Array.concat``` - O(n)  
```Array.slice``` - O(n)  
```Array.splice``` - O(n)  
```Array.sort``` - O(n * log(n))  
```Array.splice``` - O(n)  
```Array.forEach, map, filter...``` - O(n)
