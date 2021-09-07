"use strict";

/**
 * The user enters as arguments the number of seconds, minutes, hours, days, weeks, months, years.
 * Output how many seconds are in all this.
 * All parameters are optional. Consider 30 days in a month
 */

const howMuchSec = (...args) => {
  let result;
  const argsLength = args.length;
  const { min, hour, day, week, month, year } = convertToSec;

  switch (argsLength) {
    case 0:
      return 0;
    case 1:
      return args[0];
    case 2:
      return (result = args[0] + min(args[1]));
    case 3:
      return (result = args[0] + min(args[1]) + hour(args[2]));
    case 4:
      return (result = args[0] + min(args[1]) + hour(args[2]) + day(args[3]));
    case 5:
      return (result =
        args[0] + min(args[1]) + hour(args[2]) + day(args[3]) + week(args[4]));
    case 6:
      return (result =
        args[0] +
        min(args[1]) +
        hour(args[2]) +
        day(args[3]) +
        week(args[4]) +
        month(args[5]));
    case 7:
      return (result =
        args[0] +
        min(args[1]) +
        hour(args[2]) +
        day(args[3]) +
        week(args[4]) +
        month(args[5]) +
        year(args[6]));
  }
};

const convertToSec = {
  min: (num) => Math.floor(num * 60),
  hour: (num) => Math.floor(num * 3600),
  day: (num) => Math.floor(num * 86400),
  week: (num) => Math.floor(num * 604800),
  month: (num) => Math.floor(num * 2592000),
  year: (num) => Math.floor(num * 31536000),
};
