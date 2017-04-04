/*
  LeetCode.Algorithms.1
  Two Sum

  Given an array of integers, return indices of the two numbers such that they add up to a specific target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  Given nums = [2, 7, 11, 15], target = 9,

  Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].  
*/

// Brute Force - Nested Loops
var twoSum = function(nums, target) {
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
