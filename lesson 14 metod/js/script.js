"use strict";
/*методы и свойства чисел и строк
    методы - это вспомогательные функции
    свойства - это вспомогательные значени
*/
const str = "test";
const arr = [1, 2, 3];
// console.log(str.length);
// console.log(arr.length)

console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

const logg = "hello world";
console.log(logg.slice(6, 11))

console.log(logg.substring(6, 11))


console.log(logg.substr(6, 5)) //устарело но может еще встречаться

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));