'use strict';
// consol

function hello(){
    console.log("Hello World");
}

hello();

function hi(){
    console.log("Say Hi!");
}

hi();

const arr = [1, 14, 4, 30, 54],
        sorted = arr.sort(compareNum);

function compareNum(a, b){
    return a - b
}
