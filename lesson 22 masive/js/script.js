'use strict';
// масивы и псевдомасивы

const arr = [1, 12, 33, 6, 18];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b; 
}
compareNum();


arr[99] = 0; 

// arr.pop(); //удаляет последний элемент массиваж
// arr.push(10);//добавляет элемент в конец массива
 
console.log(arr);
console.log(arr.length); //свойство length состоит из последнего жлемента +1

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

for (let value of arr){
    console.log(value);
}

const arr = [1, 2, 3, 6, 8];

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item}: внутри массива ${arr}`);
});

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));