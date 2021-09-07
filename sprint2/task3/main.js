"use strict";

/**
 * Find the maximum interval between two consecutive numbers. Numbers are entered as arguments
 *
 * Example:
 * maxInterv(3, 5, 2, 7); //5
 * maxInterv(3, 5, 2, 7, 11, 0, -2); //11
 * maxInterv(3, 5); //2
 * maxInterv(3); //0
 */

const maxInterv = (...args) => {
  if (args.length === 0 || args.length === 1) return 0;

  let result = args.map((item, index) =>
    Math.abs(args[index] - args[index + 1])
  );
  result = result.filter((item) => !(item !== item));
  return Math.max(...result);
};

// const maxInterv = (...args) => {
//     return args.reduce((acc, item, index) => {
//       if (args[index + 1] || args[index + 1] === 0) {
//         let diff = Math.abs(args[index] - args[index + 1]);
//         if (diff > acc) acc = diff;
//       }
//       return acc;
//     }, 0);
//   };
