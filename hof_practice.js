// map
// To show data on website
// to update some value of data

let product_data = [
  { id: 1, product: "tshirt", price: 500, count: 10 },
  { id: 2, product: "shirt", price: 800, count: 10 },
  { id: 3, product: "jeans", price: 1500, count: 10 },
  { id: 4, product: "shorts", price: 1200, count: 10 },
  { id: 5, product: "lower", price: 2000, count: 10 },
  { id: 6, product: "shoes", price: 2500, count: 10 },
  { id: 7, product: "watch", price: 4500, count: 10 },
];

// update

// let new_discounted_data = product_data.map(function (ele, idx, array) {
//   return {
//     ...ele,
//     price: ele.price - 100,
//   };
// });

// let new_discounteds_data = product_data.map(function (ele, idx, array) {
//   return {
//     ...ele,
//     price: ele.price - 300,
//   };
// });

// console.log(new_discounteds_data);

let NewDiscountPrice = product_data.map(function (ele, idx, array) {
  return {
    ...ele,
    count: ele.price - 3,
  };
});

console.log(NewDiscountPrice);

// let discounted_shoes = product_data.map(function (ele, idx, array) {
//   if (ele.product === "shoes") {
//     return {
//       ...ele,
//       price: ele.price - 100,
//     };
//   }
//   return ele;
// });

// console.log(discounted_shoes);node

// filter

// returns array

// let product_lessthan_thousand = product_data.filter(function (ele, idx, array) {
//   if (ele.price <= 1000) {
//     return ele;
//   }
// });

// console.log(product_lessthan_thousand);

// let product_lessthan_five_hundred = product_data.filter(function (
//   ele,
//   idx,
//   array
// ) {
//   if (ele.price <= 2000) {
//     return ele;
//   }
// });

// console.log(product_lessthan_five_hundred);

// // reduce returns number
// // calculation

// let total_price = product_data.reduce(function (acc, ele, array) {
//   return acc + ele.price;
// }, 0);

// console.log(total_price);

// let ZomatoMenu = [
//   { id: 1, NonVeg: "chic masala plate", Price: 140, count: 8 },
//   { id: 2, NonVeg: "Harabhara Kabaab", Price: 360, count: 10 },
//   { id: 3, Snack: "Fish Tikka", Price: 380, count: 7 },
//   // { id: 4, complimentry: "Dal snack", Price: 0, count: "Unlimited" },
//   { id: 5, Veg: "Veg Biryani", Price: 140, count: 12 },
//   { id: 6, Snack: "Cripy Corn", Price: 100, count: 15 },
//   { id: 7, Papad: "Papad Masala,Fry Papad", Price: 20, count: 40 },
// ];

// let NewDiscount = ZomatoMenu.map(function (ele, idx, array) {
//   return {
//     ...ele,
//     Price: ele.Price - 5,
//   };
// });

// console.log(NewDiscount);

// let lessThanHundred = ZomatoMenu.filter(function (ele, idx, array) {
//   if (ele.Price <= 100) {
//     return ele;
//   }
// });

// console.log(lessThanHundred);

// let calculateCountSum = ZomatoMenu.reduce(function (acc, ele, idx, array) {
//   return acc + ele.count;
// }, 0);

// console.log(calculateCountSum);
