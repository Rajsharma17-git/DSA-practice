// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Given two sorted arrays nums1 and nums2,
// return the median of the two sorted arrays.
//
// Time Complexity: O(log(min(m, n)))
// Space Complexity: O(1)

var findMedianSortedArrays = function (nums1, nums2) {
  // Always binary search the smaller array
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  let m = nums1.length;
  let n = nums2.length;

  let low = 0;
  let high = m;

  while (low <= high) {
    let i = Math.floor((low + high) / 2);

    let j = Math.floor((m + n + 1) / 2) - i;

    let left1 = i === 0 ? -Infinity : nums1[i - 1];
    let right1 = i === m ? Infinity : nums1[i];

    let left2 = j === 0 ? -Infinity : nums2[j - 1];
    let right2 = j === n ? Infinity : nums2[j];

    // Console the current binary search step
    console.log("--------------------------------");
    console.log("nums1:", nums1);
    console.log("nums2:", nums2);
    console.log("i:", i);
    console.log("j:", j);

    console.log("left1:", left1);
    console.log("right1:", right1);
    console.log("left2:", left2);
    console.log("right2:", right2);

    // Correct partition
    if (left1 <= right2 && left2 <= right1) {
      console.log("✅ Correct partition found!");

      // Odd total length
      if ((m + n) % 2 === 1) {
        let median = Math.max(left1, left2);

        console.log("Median:", median);

        return median;
      }

      // Even total length
      let median = (Math.max(left1, left2) + Math.min(right1, right2)) / 2;

      console.log("Median:", median);

      return median;
    }

    // nums1 partition is too far right
    else if (left1 > right2) {
      console.log("⬅️ Partition is too far right");
      console.log("Moving high to:", i - 1);

      high = i - 1;
    }

    // nums1 partition is too far left
    else {
      console.log("➡️ Partition is too far left");
      console.log("Moving low to:", i + 1);

      low = i + 1;
    }
  }
};

// ==========================
// Test Cases
// ==========================

console.log("\n========== Example 1 ==========");

let nums1 = [1, 3];
let nums2 = [2];

let result1 = findMedianSortedArrays(nums1, nums2);

console.log("Final Answer:", result1);

console.log("\n========== Example 2 ==========");

nums1 = [1, 2];
nums2 = [3, 4];

let result2 = findMedianSortedArrays(nums1, nums2);

console.log("Final Answer:", result2);

// Binary search doesn't always search for a number. Sometimes it searches for the correct position/partition.
//done
