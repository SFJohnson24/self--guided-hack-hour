/*
Insertion Sort:

    Explanation: Insertion Sort builds the final sorted array one item at a time, gradually expanding the sorted part by iterating through the remaining unsorted elements and placing them in their correct position.
    Time Complexity: O(n^2) in the worst and average case, O(n) in the best case (when the list is already sorted).
    Space Complexity: O(1) (in-place sorting).
    */


  
  
  



/*
912 sort an array
Given an array of integers nums, sort the array in ascending order and return it.
You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.
*/

//Quick Sort - Best Case : O(n log n), Average Case :O(n log n), Worst Case : O(n^2)
  /*
    Quick Sort:
        Explanation: Quick Sort is a divide-and-conquer algorithm that selects a pivot element, partitions the array around the pivot, and recursively sorts the sub-arrays.
        Time Complexity: O(n log n) in the average and best case, O(n^2) in the worst case (when the pivot is consistently chosen as the smallest or largest element).
        Space Complexity: O(log n) on average, O(n) in the worst case due to the call stack.
    */
var quickSort = function (nums) {
  function quickSortHelper(nums, start, end) {
    if (start >= end) return nums;

    var pivotValue = nums[start];
    var smaller = start;
    for (var i = start + 1; i <= end; i++) {
      var bigger = i;
      if (nums[bigger] < pivotValue) {
        smaller++;
        var smallerValue = nums[bigger];
        nums[bigger] = nums[smaller];
        nums[smaller] = smallerValue;
      }
    }
    var smallerCache = nums[smaller];
    nums[smaller] = nums[start];
    nums[start] = smallerCache;

    quickSortHelper(nums, start, smaller - 1);
    quickSortHelper(nums, smaller + 1, end);
    return nums;
  }

  return quickSortHelper(nums, 0, nums.length - 1);
};

//Merge Sort - Best Case : O(n log n), Average Case :O(n log n), Worst Case : O(n log n)
//In simple terms, we can say that the process of merge sort is to divide the array into two halves, sort each half, and then merge the sorted halves back together. This process is repeated until the entire array is sorted.
  /*
    Merge Sort:
    
        Explanation: Merge Sort is a divide-and-conquer algorithm that divides the input array into two halves, recursively sorts them, and then merges the two sorted halves into one.
        Time Complexity: O(n log n) in all cases (worst, average, and best).
        Space Complexity: O(n) (additional space is required for merging).
    */
    

var mergeSort = function (nums) {
  if (nums.length < 2) return nums;
  var mid = Math.floor(nums.length / 2);
  var left = nums.slice(0, mid);
  var right = nums.slice(mid);

  function merge(left, right) {
    var result = [],
      lLen = left.length,
      rLen = right.length,
      l = 0,
      r = 0;
    while (l < lLen && r < rLen) {
      if (left[l] < right[r]) {
        result.push(left[l++]);
      } else {
        result.push(right[r++]);
      }
    }
    return result.concat(left.slice(l)).concat(right.slice(r));
  }

  return merge(mergeSort(left), mergeSort(right));
};

//Insertion Sort-Best Case : O (n), Average Case : O (n^2),Worst Case : O (n^ 2)
//     Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.
var insertionSort = function (nums) {
  for (var i = 1; i < nums.length; i++) {
    var value = nums[i];
    var hole = i;
    while (hole > 0 && nums[hole - 1] > value) {
      nums[hole] = nums[hole - 1];
      hole = hole - 1;
    }
    nums[hole] = value;
  }
  return nums;
};

//Bubble Sort - Best Case : O (n), Average Case : O (n^2),Worst Case : O (n^ 2)

//Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.

    /*
    Bubble Sort:
    
        Explanation: Bubble Sort repeatedly steps through the list to be sorted, compares adjacent elements, and swaps them if they are in the wrong order. The process is repeated until the entire list is sorted.
        Time Complexity: O(n^2) in the worst and average case, O(n) in the best case (when the list is already sorted).
        Space Complexity: O(1) (in-place sorting).
    */
    
var bubbleSort = function (nums) {
  for (var k = nums.length - 1; k >= 1; k--) {
    for (var i = 0; i < k; i++) {
      if (nums[i] > nums[i + 1]) {
        swap(i, i + 1);
      }
    }
  }
  function swap(i, j) {
    var temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  return nums;
};


