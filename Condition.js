let age = 19;
let hasVoterCard = "Yes";
let isIndian = "Yes";

if (age >= 18 && hasVoterCard == "Yes" && isIndian == "Yes") {
  console.log("You Can vote!");
} else {
  console.log("You cannot vote!");
}

// console.log(hasVoterCard == "yes");

let isLoggedin = 1; // if 0 loggedout if 1 login

// if (isLoggedin == 0) {
//   console.log("Login");
// } else {
//   console.log("Logout");
// }

let option = isLoggedin == 1 ? "Logout" : "Login";
// // condition                   true     false

console.log(isLoggedin == 1);
console.log(option);

// DOM
