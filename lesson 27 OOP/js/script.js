'use strict';
// ООП

let str = "some";
let strOnj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strOnj));

console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log("hello");
    }
};

const jone = Object.create(soldier);

// const jone = {
//     health: 100
// };

// jone.__proto__ = soldier;

// Object.setPrototypeOf(jone, soldier);

//console.log(jone.armor);

jone.sayHello();