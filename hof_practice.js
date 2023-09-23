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

let new_discounted_data = product_data.map(function (ele, idx, array) {
  return {
    ...ele,
    price: ele.price - 100,
  };
});

// console.log(new_discounted_data);

let discounted_shoes = product_data.map(function (ele, idx, array) {
  if (ele.product === "shoes") {
    return {
      ...ele,
      price: ele.price - 100,
    };
  }
  return ele;
});

// console.log(discounted_shoes);

// filter

// returns array

let product_lessthan_thousand = product_data.filter(function (ele, idx, array) {
  if (ele.price <= 1000) {
    return ele;
  }
});

console.log(product_lessthan_thousand);

// reduce returns number
// calculation

let total_price = product_data.reduce(function (acc, ele, array) {
  return acc + ele.price;
}, 0);

console.log(total_price);
