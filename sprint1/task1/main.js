"use strict";

/**
 * Implement the getModifiedArray(array) function, which takes an arbitrary array,
 * and returns the changed array with the value of the first element of the array equal to “Start”,
 * the last element of the array equal to “End” and the rest of elements should be the same as in an initial array.
 *
 * Function example:
 * getModifiedArray([12, 6, 22, 0, -8])); // [‘Start’, 6, 22, 0, ‘End’]
 */

function getModifiedArray(array) {
  return array.map((item, index) => {
    if (index === 0) {
      return "Start";
    }

    let lastItem = array.length - 1;

    if (index === lastItem) {
      return "End";
    }

    return item;
  });
}

console.log(getModifiedArray([12, 6, 22, 0, -8]));
