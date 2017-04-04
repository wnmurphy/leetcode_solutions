/*
  LeetCode.Algorithms.1
  Two Sum

  Given an array of integers, return indices of the two numbers such that they add up to a specific target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  Given nums = [2, 7, 11, 15], target = 9,

  Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].  
*/

// Brute Force - Nested Loops
var twoSumBruteForce = function(nums, target) {
   var result;
   nums.forEach(function(num1, idx1){
       nums.forEach(function(num2, idx2){
           if (num1 + num2 === target &&
                idx1 !== idx2) {
                result = [idx2, idx1];
            }           
       });
   });
   return result;
};

// Two-Pass Hash Table
// We can trade space for time performance and use the constant time access of hash tables to improve the algorithm.
// Instead of nesting loops, we can have two separate passes of a storage hash table.
// This solution only works if there are no repeating values in the array; to get a constant time lookup the numbers can only be stored as keys, and keys must be unique.
// Another limitation of this solution is that, since there is no way to enforce iteration order over an object's keys, there is no way to enforce the order of array indices returned in the result tuple.
var twoSum = function (nums, target) {
  var numbers = {}, complement, result;
  // First we map the numbers/indices in the array to an object as key-value pairs.
  // [2, 7, 11, 15]
  nums.map(function(num, idx){
    numbers[num] = idx; 
    // { 
    //  "2": 0,
    //  "7": 1, 
    //  "11": 2, 
    //  "15": 3 
    // }
  });
  // Then we can loop over the storage hash...
  for (var num in numbers) {
    // ...and dynamically define the current complement we're searching for.
    complement = target - num;
    // If the complement exists as a key in the numbers object,
    if (complement in numbers) {
      // We can just return an array that contains the two indices we stored as values in the numbers object.
      result = [numbers[complement], numbers[num]];
      break;
    }
  }
  return result;
};