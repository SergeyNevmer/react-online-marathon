"use strict";

/**
 * Suppose, you have an array of students:
 *
 * let students = [
  {
    name: "Anna",
    languages: ["English", "Ukrainian"],
    age: 21,
  },
  {
    name: "Bob",
    languages: ["Polish", "Spanish"],
    age: 26,
  },
  {
    name: "Alice",
    languages: ["Italian", "Russian"],
    age: 18,
  },
];


Please, implement a function getLanguages.
The function takes an array of students as a first parameter and a condition on a student (function)
getLanguages should return an array of languages from students that satisfy a condition.

 */

const getLanguages = (arr, func = null) => {
  if (func === null) {
    return arr.reduce((acc, item) => {
      acc.push(...item.languages);
      return acc;
    }, []);
  }

  return arr.reduce((acc, item) => {
    if (func(item)) {
      acc.push(...item.languages);
    }
    return acc;
  }, []);
};
