/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  // Base Case
  if (nums.length === i) return 1;
  // Normal Case
  return nums[i] * product(nums, i + 1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, longest_count = 0) {
  // Base Case
  if (words.length === i) return longest_count;
  // Normal Case
  longest_count = Math.max(words[i].length, longest_count)
  return longest(words, i+1, longest_count)
  }


/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, newStr = "") {
  // Base Case
  if (i >= str.length) return newStr; 
  // Normal Case
  newStr += str[i]
  return everyOther(str, i + 2, newStr)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, left_idx = 0) {
  right_idx = str.length - 1 - left_idx
  // Base Case
  if (left_idx >= right_idx) return true;
  // Normal Case
  if (str[left_idx] == str[right_idx]) {
    return isPalindrome(str, left_idx + 1)
  }
  else return false;

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  // Base Case
  if (i === arr.length) return -1;
  // Normal Case
  if (arr[i] === val) return i;
  return findIndex(arr, val, i + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length-1, revStr = "") {
  // Base Case
  if (i < 0) return revStr;
  // Normal Case
  revStr += str[i];
  return revString(str, i - 1, revStr)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr = []) {
  for (key in obj) {
    if (typeof obj[key] === 'object') gatherStrings(obj[key], arr);
    else {
      if (typeof obj[key] === 'string') arr.push(obj[key]);
    }
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) return -1
  let mid = Math.floor((left + right)/2);
  if (arr[mid] === val) return mid;
  if (arr[mid] > val) return binarySearch(arr, val, left, mid - 1)
  else return binarySearch(arr, val, mid + 1, right)
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
