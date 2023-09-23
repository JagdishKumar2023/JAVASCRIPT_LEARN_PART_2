// High order function:-

// map, filter, reduce

//=== MAP:-

// let ecommerce_data = [
//   // array of objects
//   { id: 1, product: "T-shirt", price: 500, count: 10 },
//   { id: 2, product: "Jeans", price: 1500, count: 20 },
//   { id: 3, product: "Shirt", price: 1000, count: 30 },
// ];

let ecommerce_data = [
  { id: 1, prodcut: "T-shit", price: 500, count: 10 },
  { id: 2, product: "Jeans", price: 1500, count: 20 },
  { id: 3, product: "shirt", price: 1000, count: 10 },
];

ecommerce_data.map(function (ele, idx) {
  console.log(ele.price + 5, idx);
});

let updated_ecommerce_data = ecommerce_data.map(function (ele, idx) {
  // map returns array
  return ele.count + 1;
});

console.log(updated_ecommerce_data);

let updated_ecommerce_data2 = ecommerce_data.map(function (ele, idx) {
  return {
    ...ele,
    price: ele.price - 100,
  };
});

console.log(updated_ecommerce_data2);
console.log(ecommerce_data); // map does not impact the original data

// ----------------------------------XXXXXXXXXXXXXXXXXXXXXX--------------------------
// ===REDUCE :-
// calculation;

let totalPrice = updated_ecommerce_data2.reduce(function (acc, ele) {
  return acc + ele.price;
}, 0); // reduce returns numbers

console.log(totalPrice);

// -------------------------xxxxxxxxxxxxxxxxxxxxxxxx---------------------

//===FILTER :-

let only_tshirts = ecommerce_data.filter(function (ele, idx) {
  if (ele.product === "T-shirt") {
    return ele;
  }
});

console.log(only_tshirts);

// filter returns array

// only show product which is lower than 1000 rs

let less_than_thousand = ecommerce_data.filter(function (ele, idx) {
  if (ele.price <= 1000) {
    return ele;
  }
});

console.log(less_than_thousand);
