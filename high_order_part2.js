//===MAP===(HOTEL DATA FOR VEG AND NON-VEG PRICE  )

let ZomatoMenu = [
  { id: 1, NonVeg: "chic masala plate", Price: 140, count: 8 },
  { id: 2, NonVeg: "Harabhara Kabaab", Price: 360, count: 10 },
  { id: 3, Snack: "Fish Tikka", Price: 380, count: 7 },
  // { id: 4, complimentry: "Dal snack", Price: 0, count: "Unlimited" },
  { id: 5, Veg: "Veg Biryani", Price: 140, count: 12 },
  { id: 6, Snack: "Cripy Corn", Price: 100, count: 15 },
  { id: 7, Papad: "Papad Masala,Fry Papad", Price: 20, count: 40 },
];

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

// === SCOTCH DATA

let scotch_data = [
  { id: 1, scotch: "HUNDRED Pipers", price: 1400, total_sale: 8 },
  { id: 2, scotch: "Belantin", price: 1700, total_sale: 12 },
  { id: 3, scotch: "Black and White", price: 1870, total_sale: 15 },
  { id: 4, scotch: "Redlabel", price: 2150, total_sale: 13 },
  { id: 5, scotch: "Black Dog", price: 2420, total_sale: 6 },
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

// console.log(discount_Redlabel);

// let discount_Black = scotch_data.map(function (ele, idx, array) {
//   if (ele.scotch === "Black and White") {
//     return {
//       ...ele,
//       price: ele.price - 170,
//     };
//   }
// });

// console.log(discount_Black);

// let discount_blenten = scotch_data.map(function (ele, idx, array) {
//   if (ele.scotch === "Belantin") {
//     return {
//       ...ele,
//       price: ele.price - 170,
//     };
//   }
// });

// console.log(discount_blenten);

// let discount_HUNDRED = scotch_data.map(function (ele, idx, array) {
//   if (ele.scotch === "HUNDRED Pipers") {
//     return {
//       ...ele,
//       price: ele.price - 140,
//     };
//   }
// });

// console.log(discount_HUNDRED);

//===FILTER (Roof chhatana)

// let lessThanEighteen = scotch_data.filter(function (ele, idx, array) {
//   if (ele.price <= 1800) {
//     return ele;
//   }
// });

// console.log(lessThanEighteen);

// let lessThanTwelve = scotch_data.filter(function (ele, idx, array) {
//   if (ele.price <= 1400) {
//     return ele;
//   }
// });

// console.log(lessThanTwelve);

// let lessThanHundred = scotch_data.filter(function (ele, idx, array) {
//   if (ele. <= 1500) {
//     return ele;
//   }
// });

// console.log(lessThanHundred);

// let lessThanTwoThousand = scotch_data.filter(function (ele, idx, array) {
//   if (ele.price <= 2000) {
//     return ele;
//   }
// });

// console.log(lessThanTwoThousand);

// let TotalSaleLessThanten = scotch_data.filter(function (ele, idx, array) {
//   if (ele.total_sale <= 10) {
//     return ele;
//   }
// });

// console.log(TotalSaleLessThanten);

// let TotalSaleLessThanFifteen = scotch_data.filter(function (ele, idx, array) {
//   if (ele.total_sale <= 15) {
//     return ele;
//   }
// });

// console.log(TotalSaleLessThanFifteen);

//===REDUCE (for calculation only)

// let total_sale = scotch_data.reduce(function (acc, ele, array) {
//   return acc + ele.total_sale;
// }, 0);

// console.log(total_sale);

// let total_price = scotch_data.reduce(function (acc, ele, idx, array) {
//   return acc + ele.price;
// }, 0);

// console.log(total_price);

// let total_price = ZomatoMenu.reduce(function (acc, ele, idx, array) {
//   return acc + ele.Price;
// }, 0);

// console.log(total_price);

let total_count = ZomatoMenu.reduce(function (acc, ele, idx, array) {
  return acc + ele.count;
}, 0);

console.log(total_count);
