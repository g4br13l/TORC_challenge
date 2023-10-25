
# TORC_challenge
A challenge proposed by TORC

## Challenge description
In this challenge, we got a function that receives an array of numbers as a parameter, identifies repeated numbers, and removes all occurrences of them. 
After that, the function makes the sum of all the elements left over.

Original function:
```
const sumUniqueOriginal = (nums) => {
    let sum = 0;
    nums.forEach(num => {
        if (nums.indexOf(num) === nums.lastIndexOf(num)) { sum += num; }
    });
    return sum;
}
```

The complexity of the original function is O(n²). I improved the performance of this function to O(n).


> [!NOTE]
> In the main branch, we got the original function.

> [!NOTE]
> In the best_performance branch we have the function with optimized performance based on the Big-O Notation and exception handling.


