
// Optimized function O(n)
const sumUniqueOptimized = (arrayNums) => {
  const numCount = {};
  let sum = 0;

  try {
    arrayNums.forEach( num => {
      if(typeof num !== 'number') throw 'type_not_accepted_exception';
      numCount[num] = (numCount[num] || 0) + 1;
    });

    arrayNums.forEach( num => {
      if(numCount[num] === 1) sum += num;
    });

    return sum;
  }
  catch (err) { console.log(err); }
};

console.log( sumUniqueOptimized([1, 4, 4, 2, 5, 5, 5]) );