"use strict";

// Задание №3
// const topSpeed = 160;
// const distance = 617.54;

// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;

// console.log(topSpeed)


// Задание №4

// const pricePerItem = 3500;
// const orderedQuantity = 4;


// const totalPrice = pricePerItem * orderedQuantity;

// console.log(totalPrice)

// Задание №5

// const productName = "Droid";
// const pricePerItem = 3500;

// const message = `You picked ${productName}, price per item is ${pricePerItem}, credits`;

// console.log(message)

// Задание №6

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// console.log(message)

// Задача №7

// function sayHi() {
//   console.log("Hello, this is my first function!")
// }

// sayHi()

// Задача №8

// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// Задача №9

// function add(a, b, c) {
  
// return a + b + c;
// }

// let result = add(15 , 27, 10);
// result = add(10 , 20, 30);
// result = add(5 , 10, 15);

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// Задание №10

// function makeMessage (name, price) {
//   // Change code below this line
//    const message =`You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// };


// console.log(makeMessage('Radar', 6150));
// console.log(makeMessage('Scanner', 3500));
// console.log(makeMessage('Reactor', 8000));
// console.log(makeMessage('Engine', 4070));

// Задание 11

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   return totalPrice;
// };

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 70));

// Задание 12

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
 
// const makeOrderMessage = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   return makeOrderMessage;
// }


// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

// Задание 13

// function isAdult(age) {
  
//   const passed = age >= 18;
 
//   return passed;
// }


// console.log(isAdult(20));
// console.log(isAdult(14));
// console.log(isAdult(8));
// console.log(isAdult(37));


// Задание 14

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD ;

//   // Change code above this line
//   return isMatch;
// }

// console.log(isValidPassword("mangodab3st"))
// console.log(isValidPassword("kiwirul3z"))
// console.log(isValidPassword("jqueryismyjam"))

// Задание 15

// function checkAge(age) {
//   let message;

//   if (age >= 18) { // Change this line
//     message =   'You are an adult';
//   } else {
//     message =  'You are a minor';
//   }

//   return message;
// }


// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// Задание 16

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (available <= ordered) {
//     message = "Not enough goods in stock!";
//   }

//   else {
//     message = "Order is processed, our manager will contact you.";
//   }
//   // Change code above this line
//   return message;
// }


// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// Задание 17


// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;


// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// Задание 18

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//  const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";
//   }

//   else {
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;

//   }
  
//   // Change code above this line
//   return message;
// }


// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));

// Задание 19

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// Задание 20

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     message = "There are no products in the order!";
//   } else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
//   // Change code above this line
//   return message;
// }


// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 30));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// Задание 21

// function isNumberInRange(start, end, number) {
//   const isInRange = number > start && number < end; // Change this line

  
//   return isInRange;
// }


// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));

// Задание 22

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip"; // Change this line

//   return canAccessContent;
// }

// console.log(checkIfCanAccessContent("pro"))
// console.log(checkIfCanAccessContent("starter"))
// console.log(checkIfCanAccessContent("vip"))
// console.log(checkIfCanAccessContent("free"))

// Задание 23



// Задание 24

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//  if (totalSpent >= 50000) {
//    discount = GOLD_DISCOUNT;
//  } if (totalSpent >= 20000 && totalSpent < 50000) {
//    discount = SILVER_DISCOUNT;
//   } if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } if (totalSpent < 5000) {
//     discount = BASE_DISCOUNT;
//   }
 
//   // Change code above this line
//   return discount;
// }

// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));
// console.log(getDiscount(20000));
// console.log(getDiscount(50000));

// Задание 25

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//     message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you"
    
//   if (ordered > available) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }

//   console.log(message)
  
//   // Change code above this line
//   return message;
// }

// checkStorage();

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// Задание 26

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";

   
//   // Change code above this line
//   return message;
// }


// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("r3actsux"));

// Задание 27

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional":  // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }

// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("starter"));

// Задание 28

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//   if (password === null) {
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

// //   заменено на свитч

//   switch(password){
//     case null:
//       message = "Canceled by user!";
//       break;

//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;

//     default:
//       message = "Access denied, wrong password!";
//   }

//   // Change code above this line
//   return message;
// }


// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// Задание 29

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//  switch (country) {
//   case "China":
//      message = "Shipping to China will cost 100 credits";
//   break;

//    case "Chile":
//      message = "Shipping to Chile will cost 250 credits";
//      break;

//    case "Australia":
//      message = "Shipping to Australia will cost 170 credits";
//      break;

//    case "Jamaica":
//      message = "Shipping to Jamaica will cost 120 credits";
//      break;

//    default:
//      message = "Sorry, there is no delivery to your country";
// }
//   // Change code above this line
//   return message;
// }


// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Germany"));
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("Jamaica"));
// console.log(getShippingCost("Sweden"));

// Задание 30

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }


// console.log(getNameLength("Poly"));
// console.log(getNameLength("Harambe"));
// console.log(getNameLength("Billy"));
// console.log(getNameLength("Joe"));

// Задание 31

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];


// Объявлена переменная courseTopic
// Значение переменной courseTopic это строка "JavaScript essentials"
// Объявлена переменная courseTopicLength
// Значение переменной courseTopicLength это число 21
// Объявлена переменная firstElement
// Значение переменной firstElement это строка "J"
// Объявлена переменная lastElement
// Значение переменной lastElement это строка "s"

// Задание 32

// function getSubstring(string, length) {
//   const substring = string.slice(string, length); // Change this line

//   return substring;
// }

// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 6));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 11));
// console.log(getSubstring("Hello world", 0));

// Задание 33

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
// if (message.length > maxLength) {
//   result = message.slice(0, maxLength) + "...";
  
// } else
//   result = message;

//   /// Change code above this line
//   return result;
// }



// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

// Задание 34


// Модуль 2 Задание 1

// function checkAge(age) {
//   if (age >= 20) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));


// Задание 2

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

  

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
    
//   }
//      return "Access denied, wrong password!";
 

   
//   // Change code above this line
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// Задание 3


// function checkStorage(available, ordered) {
//   // Change code below this line
  

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }  if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//     return "The order is accepted, our manager will contact you";
  

  
//   // Change code above this line
// }


// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130))
// console.log(checkStorage(70, 0))
// console.log(checkStorage(200, 20))
// console.log(checkStorage(200, 250))
// console.log(checkStorage(150, 0))

// Задание 5


// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = "apple";
// const secondElement = "plum";
// const lastElement = "orange";
// // Change code below this line

// Задание 6

// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";
// // Write your code under this line

// Задание 7


// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;
// // Change code below this line


// Задание 8 Индекс последнего элемента

// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length -1;
// const lastElement = fruits[lastElementIndex];


// Задание 9

// function getExtremeElements(array) {
//   // Change code below this line

// const firstElement = array[0]
// const lastElement = array[array.length -1]
// const generalElement = [firstElement, lastElement]
//   return generalElement;
//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// Задание 10

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   words =message.split(delimiter)
//   // Change code above this line
//   return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));


// Задание 11

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line

// const separatorElem = message.split(" ")
// const oneWord = separatorElem.length;
// const generalMeaning = oneWord * pricePerWord;
 
//   return generalMeaning
//    // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));


// Задание 12

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line

//   string = array.join(delimiter);

//   // Change code above this line
//   return string;
// }

// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));


// Задание 13

// function slugify(title) {
//   // Change code below this line

// const slug = title.toLowerCase().split(" ").join("-");
//   return slug
//   // Change code above this line
// }

// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));


// Задание 14


// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(2);


// Задание 15

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// Задание 16

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line

// const newArray = firstArray.concat(secondArray);
//  if (newArray.length > maxLength) {
//    return newArray.slice(0, maxLength)
//   } else {
//    return newArray
//   }
  
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));


// Задание 17

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

// Задание 18

// function calculateTotal(number) {
//  // Change code below this line
//  let numbers = 0;
//   for (let i = 1; i <= number; i += 1)
//    numbers += i;

//
//   return numbers
// }

// Задание 19

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// Задание 20

// function calculateTotalPrice(order) {
// let total = 0;
// for (let i = 0; i < order.length; i += 1)
//    total += order[i];
//   return total;
// }

// Задание 21

// function findLongestWord(string) {
//   // Change code below this line
//  let newString = string.split(" ");
//   let word = newString[0];
// for (let i = 0; i < newString.length; i +=1)
//  if (newString[i].length > word.length) {
//    word = newString[i]
//  }
//   return word
//   // Change code above this line
// }

// Задание 22

// function createArrayOfNumbers(min, max) {
//   const numbers = [] ;
//   // Change code below this line
// for (let i = min; i <= max; i +=1)
//  numbers.push(i)
  
//   // Change code above this line
//   return numbers;
// }

// Задача 23
// Не совсем понял
// function filterArray(numbers, value) {
//  const number = []
//    for (num of numbers) {
//      if (num > value){
//      number.push(num);
//      }
//    }
// return number
// }

// Задача 24

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }

// Задача 25

// function getCommonElements(array1, array2) {
//   // Change code below this line

// const newArray = [];
//   for (let number of array1) {
//     if (array2.includes(number)) {
//       newArray.push(number);
//     }
//   }
//   return newArray;

//  // Change code above this line
// }

// Задача 26

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

// for (let array of order)
//  total += array;
 
//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }

//   // Change code above this line
//   return total;
// }

// Задача 27

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let number of numbers) {
    

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// Задача 28


// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

// console.log(a)

// Задача 29

// function getEvenNumbers(start, end) {
//    // Change code below this line
// let evens = [];

//   for (let i = start; i <= end; i +=1){
//     if (i % 2===0) {
//       evens.push(i);
      
//     }
//   }
//   return evens
//     // Change code above this line
//   }

//   Задача 30


// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// Задача 31

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return i
//       // break;
//     }
//   }

//   return number;
//   // Change code above this line
// }


// Задача 32

// function includes(array, value) {
//   // Change code below this line

//     for (let arra of array)
      
//   if (arra === value) {
//     return true
//   }
//   return false
//   // Change code above this line
// }


// Модуль 3 Задача 18

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line

// for (const product of products) {
//   if (product.name === productName) {
//     return product.price
//   }
// }
//  return null
//   // Change code above this line
// }

// Задача 19

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line

//  let propertyValues = [];
//   for (let product of products) {
//     const keys = Object.keys(product);
//     if (keys.includes(propName)) {
//       propertyValues.push(product[propName]);
//     }
//   }
// return propertyValues;

//   // Change code above this line
// }

// Задача 20


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   const total = 0;
// for (const product of products) {
//   if (product.name === productName)
//     return product.price * product.quantity
// }

// return total
  
//   // Пиши код выше этой строки
// }

// Задача 21 

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {yesterday, today, tomorrow} = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// Задача 22 

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday,
//   today,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   tomorrow,
// } = highTemperatures;
// // Change code above this line
//  const meanTemperature = (yesterday + today + tomorrow) / 3;

//  Задача 23 

