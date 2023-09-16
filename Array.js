// //===Arrays===(An array is a special variable, which can hold more than one value)

// let book1 = "Maths";
// let book2 = "Physic";
// let book3 = "Chemistry";
// let book4 = "bio";
// let book5 = "Anantomy";

// console.log(book3);

//==Arrays Pratices==(Arrays )

//==push==

// let Vegies = ["Leadyfinger", "Tomato", "Potato", "green-chilli"];

// Vegies.push("Peas", "Carrot");

// console.log(Vegies);

// //==pop== ( pop = Last element is remove )

// let fruits = ["Mango", "Graps", "apple"];

// fruits.pop();

// // console.log(fruits);

// fruits.unshift("Hindi", "English"); //(unshift = (Add new elements to an array)) Add some one or more element in the staring part of array (Add new elements to an array))

//==splice

// fruits.splice(1, 2);

// fruits.length = 0;

// console.log(fruits);

//==Indexof

// let book = ["maths", "physic", "chemistry"];

// let position = book.indexOf(2);

// console.log(position);

//==(Split)(space between Two string)

// let text = "This is a  random text";

// let wordarray = text.split("-");

// console.log(text);

//==(WithPages)

// let book = ["Math", "Physics", "bio", "Computer Science"];

// let bookWithPages = [[("Math", "400")], [("Physic", "500")], [("Bio", "600")]];

// let fetch = bookWithPages[0];

// console.log(fetch);

// let movies = ["Pushpa", "RRR", "kgf"];

// let actormovies = [
//   [("allu-arjun", "Pushpa")],
//   [("ram charen", "RRR")],
//   [("yash", "kgf")],
// ];

// actormovies[0];

// console.log(actormovies);

// for (i = 0; i < actormovies; i++) {
//   console.log(`Element ${i} is ${movies[i]} \n`);
// }

// console.log(actormovies);

//===Parameters and Argument (funtion)

// function MulTable(num) {
//   for (i = 1; i <= 10; i++) {
//     console.log(`${num} x ${num * i}`);
//   }
// }

// MulTable(4);

// function add(sum) {
//   for (i = 1; i <= 10; i++) {
//     console.log(`${sum} + ${sum + i}`);
//   }
// }

// add(1);

// function divide(num1, num2) {
//   console.log(num1 / num2);
// }

// divide(20, 2);
