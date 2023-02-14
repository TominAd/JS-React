"use strict";
//функции FUNCTION DECLARATION Создаетья до начала выполнения скипта, можно вызвать перед объявлением
let num = 20;


function showFirstMessage(text){
    console.log(text);
    let num = 15;
    console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);

function calc(a, b){
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret(){
    let num = 50;

    return num;
}

const anotheNum = ret();
console.log(anotheNum);

//FUNCTION EXPRESSION Создаеться только тогда, когда доходит поток кода, можно вызвать после объявления
const logger = function(){
    console.log("hello")
};

logger();

//Стелочная функция не имеет контекста вызова
const calc = (a, b) => {return a + b};
const calc = (a, b) => a + b;
