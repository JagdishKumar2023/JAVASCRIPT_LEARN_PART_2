// function printName(naam) {
//   return naam;
// }

// console.log(printName("jagdish"));

// function fatherName(father) {
//   return father;
// }

// HOF - high order function
// Map, filter, reduce; kya return karta hai

// HOF - Map, filter, reduce -> youtube

// function addTwoNumber(number1, number2) {
//   console.log(number1 * number2);
// }

// addTwoNumber(2, 7);

// function jagdish(num, num2) {
//   return num - num2;
// }

// jagdish(2, 8);

// function MultiTwoNumber(number1, number2) {
//   console.log(number1 * number2);
// }

// MultiTwoNumber(4, 7);

// function loginUserMessage(username) {
//   return `${username} just logged in`;
// }

// loginUserMessage("12,6");

// function printMessage() {
//   console.log("Hello Everyone");
//   console.log("skill");
// }

// printMessage();

// function sayMessage() {
//   console.log("I am Learing coding as Begner");
// }

// sayMessage();

// function passMessage() {
//   return "I am Happy learn to function in js";
// }

// const message = passMessage();
// // console.log(message.toUpperCase());
// // console.log(message.toLowerCase());

// const newMessage = message + " Enroll Today";
// console.log(newMessage);

// function NumMulti(p1, p2, p3) {
//   let d = p1 * p2 * p3;
//   return d;
// }

// var b = NumMulti("2,4,8");
// console.log(b);

// Mutipal  function is  are add

// const a = 22;
// const b = 44;
// sumOftwoNumber(a, b);

// const c = 4;
// const d = 21;
// sumOftwoNumber(c, d);

// const e = 5;
// const f = 25;
// sumOftwoNumber(e, f);

// function sumOftwoNumber(a, b) {
//   const sum = a + b;
//   console.log(sum);
// }

// In case of multiply

// function sumOftwoNumber(a, b) {
//   const sum = a * b;
//   console.log(sum);
// }

// function square(num) {
//   return num * num;
// }

// console.log(square(2));

function addSquares(a, b) {
  const sa = square(a);
  const sb = square(b);

  function square(num) {
    return num * num;
  }

  return sa + sb;
}

console.log(Squares(2, 4));
