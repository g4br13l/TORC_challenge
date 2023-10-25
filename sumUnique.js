
// original function O(n^2)
const sumUniqueOriginal = (nums) => {

  let sum = 0;

  nums.forEach(num => {

    if (nums.indexOf(num) === nums.lastIndexOf(num)) {
      sum += num;
    }

  });

  return sum;
}

console.log( sumUniqueOriginal([1, 4, 4, 2, 5, 5, 5]) );