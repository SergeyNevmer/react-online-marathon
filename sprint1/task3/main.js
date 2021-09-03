"use strict";

/**
 * Implement the longestLogin(loginList) function, which takes an array of user logins loginList  and returns the longest login.
 * If the logins of the same length are the longest in the array, the login element with the largest index is returned.
 * Tip: You can use the reduce() method to solve the task.
 *
 * Function examples:
 * longestLogin(["serg22", "tester_2", "Prokopenko", "guest"]);   //  Prokopenko
 * longestLogin(["user1", "user2", "333", "user4", "aa"]);   //  user4
 */

function longestLogin(loginList) {
  let longestLogin = loginList[0];

  for (let i = 0; i < loginList.length; i += 1) {
    if (longestLogin.length <= loginList[i].length) {
      longestLogin = loginList[i];
    }
  }
  return longestLogin;
}

console.log(longestLogin(["serg22", "tester_2", "Prokopenko", "guest"]));
console.log(longestLogin(["user1", "user2", "333", "user4", "aa"]));
