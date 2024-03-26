/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let strArr = str.toLowerCase().split("")
  strArr = strArr.reverse()
  let reversedStr = strArr.join("")
  console.log(reversedStr)
  if (reversedStr === str) {
    return true;
  }else {
    return false
  }
}

isPalindrome('apple')


module.exports = isPalindrome;
