//===MAP===(HOTEL DATA FOR VEG AND NON-VEG PRICE  )

// let ZomatoMenu = [
//   { id: 1, NonVeg: "chic masala plate", Price: 140, count: 8 },
//   { id: 2, NonVeg: "Harabhara Kabaab", Price: 360, count: 10 },
//   { id: 3, Snack: "Fish Tikka", Price: 380, count: 7 },
//   { id: 4, complimentry: "Dal snack", Price: 0, count: "Unlimited" },
//   { id: 5, Veg: "Veg Biryani", Price: 140, count: 12 },
//   { id: 6, Snack: "Cripy Corn", Price: 100, count: 15 },
//   { id: 7, Papad: "Papad Masala,Fry Papad", Price: 20, count: 40 },
// ];

// update

// let NewZomatoMenu = ZomatoMenu.map(function (ele, idx, array) {
//   return {
//     ...ele,
//     count: ele.count - 7,
//   };
// });

// console.log(NewZomatoMenu);

// let NewZomatoMenu = ZomatoMenu.map(function (ele, idx, array) {
//   return {
//     ...ele,
//     Price: ele.Price + 30,
//   };
// });

// console.log(NewZomatoMenu);

//worng code dout

// let discount_Snack = ZomatoMenu.map(function (ele, idx, array) {
//   return {
//     ...ele,
//     Snack: ele.Snack - 40,
//   };
// });

// console.log(discount_Snack);

// let discount_Snack = ZomatoMenu.map(function (ele, idx, array) {
//   if (ele.Snack === "Fish Tikka") {
//     return {
//       ...ele,
//       Price: ele.Price - 50,
//     };
//   }
// });

// console.log(discount_Snack);

//=== SCOTCH DATA

let scotch_data = [
  { id: 1, scotch: "HUNDRED Pipers", price: 1400, total_sale: 8 },
  { id: 2, scotch: "Belantin", price: 1700, total_sale: 12 },
  { id: 3, scotch: "Black and White", price: 1870, total_sale: 15 },
  { id: 4, scotch: "Redlabel", price: 2150, total_sale: 13 },
];

// let Newtotal_sale = scotch_data.map(function (ele, idx, array) {
//   return {
//     ...ele,
//     total_sale: ele.total_sale - 5,
//   };
// });

// console.log(Newtotal_sale);

// let Newscotch_data = scotch_data.map(function (ele, idx, array) {
//   return {
//     ...ele,
//     price: ele.price - 100,
//   };
// });

// console.log(Newscotch_data);

// let Newscotch_data = scotch_data.map(function (ele, idx, array) {
//   return {
//     ...ele,
//     total_sale: ele.total_sale - 4,
//   };
// });

// console.log(Newscotch_data);

// let discount_Redlabel = scotch_data.map(function (ele, idx, array) {
//   if (ele.scotch === "Redlabel") {
//     return {
//       ...ele,
//       price: ele.price - 150,
//     };
//   }
// });

// let discount_Black = scotch_data.map(function (ele, idx, array) {
//   if (ele.scotch === "Black and White") {
//     return {
//       ...ele,
//       price: ele.price - 170,
//     };
//   }
// });

// console.log(discount_Black);

// console.log(discount_Redlabel);

// let discount_HUNDRED = scotch_data.map(function (ele, idx, array) {
//   if (ele.scotch === "HUNDRED Pipers") {
//     return {
//       ...ele,
//       price: ele.price - 140,
//     };
//   }
// });

// console.log(discount_HUNDRED);
