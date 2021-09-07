"use strict";

/**
 * The function filterByN receives an array of integers, a number and a parameter (greater, less).
 * Print a new array, where all elements will be greater/less than this number
 * By default, the number is 0, the parameter is greater.
 *
 *
 * Example:
 * filterNums([-1, 2, 4, 0, 55, -12, 3], 11, 'greater');  //[ 55]
 * filterNums([-2, 2, 3, 0, 43, -13, 6], 6, 'less'); // [-2, 2, 3, 0, -13]
 * filterNums([-2, 2, 3, 0, 43, -13, 6], -33, 'less'); //  []
 * filterNums([-2, 2, 3, 0, 43, -13, 6]); // [2, 3, 43, 6]
 * filterNums([-2, 2, 3, 0, 43, -13, 6], 23);  // [43]
 */

const filterNums = (arr, num = 0, str = "greater") => {
  switch (str) {
    case "greater":
      return arr.filter((item) => item > num);
    case "less":
      return arr.filter((item) => item < num);
  }
};
