"use strict";
//функции практика


function sayHello(name){
    console.log(`Привет, ${name}!`);
    return(`Привет, ${name}!`);
}
sayHello(`Антон`);

function returnNeigboringNumbers(num){
    console.log([num - 1, num, num + 1]);
    return [1 - num, num, num + 1];
}
returnNeigboringNumbers(5);

function getMathResult(num, times){
    if (typeof(times) !== "number" || times <= 0){
        return num;
        
    }
    let str = "";
    for (let i = 1; i <= times; i++){
        if(i === times){
            str += `${num * i}`;
        }else {
            str += `${num * i}---`;
        }
    }
    console.log(str);
    //return str;
}
getMathResult(5, 3);
