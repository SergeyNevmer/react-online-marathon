"use strict";

// Save object { name: "Tom", age: 25 } to localStorage with key: "user"

const user = { name: "Tom", age: 25 };
localStorage.setItem("user", JSON.stringify(user));
