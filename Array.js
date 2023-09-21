// ===Arrays===(An array is a special variable, which can hold more than one value)

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

//==SPLICE==

// fruits.splice(1, 2);

// fruits.length = 0;

// console.log(fruits);

//==indexof==

// let book = ["maths", "physic", "chemistry"];

// let position = book.indexOf(0);

// console.log(position);

//==(Split)(Space Between Two string)

// let text = "This is a  random text";

// let wordarray = text.split("-");

// console.log(text);

//==(WITHPAGES)==

// let book = ["Math", "Physics", "bio", "Computer Science"];

// let bookWithPages = [[("Math", "400")], [("Physic", "500")], [("Bio", "600")]];

// let fetch = bookWithPages[1];

// console.log(fetch);

//===Dout session===

// let movies = ["Pushpa", "RRR", "kgf"];

// let actormovies = [
//   ["Allu-arjun", "Pushpa"],
//   ["Ram charen", "RRR"],
//   ["Yash", "KGF"],
//   ["Allu-arjun", "Pushpa"],
//   ["Ram charen", "RRR"],
//   ["Yash", "KGF"],
//   ["Allu-arjun", "Pushpa"],
//   ["Ram charen", "RRR"],
//   ["Yash", "KGF"],
//   ["Allu-arjun", "Pushpa"],
//   ["Ram charen", "RRR"],
//   ["Yash", "KGF"],
//   ["Allu-arjun", "Pushpa"],
//   ["Ram charen", "RRR"],
//   ["Yash", "KGF"],
//   ["Allu-arjun", "Pushpa"],
//   ["Ram charen", "RRR"],
//   ["Yash", "KGF"],
//   ["Allu-arjun", "Pushpa"],
//   ["Ram charen", "RRR"],
//   ["Yash", "KGF"],
//   ["Allu-arjun", "Pushpa"],
//   ["Ram charen", "RRR"],
//   ["Yash", "KGF"],
//   ["Allu-arjun", "Pushpa"],
//   ["Ram charen", "RRR"],
//   ["Yash", "KGF"],
// ];

// for (let i = 0; i < actormovies.length; i++) {
//   //DRY - Do not repeat
//   console.log(actormovies[i][0]);
// }

// console.log(actormovies.length);

// console.log(actormovies[0][0]);
// console.log(actormovies[1][0]);
// console.log(actormovies[2][0]);

// for (i = 0; i < actormovies; i++) {
//   console.log(`Element ${i} is ${movies[i]} \n`);
// }

// console.log(actormovies);

//===Parameters and Argument (funtion)

// function MulTable(num) { (Parameter)
//   for (i = 1; i <= 10; i++) {
//     console.log(`${num} x ${num * i}`);
//   }
// }

// MulTable(4);(Arguments)

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
