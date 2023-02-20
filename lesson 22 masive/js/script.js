'use strict';
// объект

const options = {
    name: "test",
    width: 1024,
    heigth: 1024,
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest: function(){
        console.log("Test");
    }
};

options.makeTest();

// // console.log(option.name);

// // delete option.name;
// // console.log(option);

// //перебор для объектов
// let counter = 0;
// for(let key in options){
//     if(typeof(options[key]) === "object"){
//         for (let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter ++;
//         }
//     }else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter ++;
//     }
    
// }
// console.log(counter);

console.log(Object.keys(options).length);

const {border, bg} = options.colors;
console.log(border);