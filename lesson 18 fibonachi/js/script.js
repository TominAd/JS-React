//доп задание 

'use strict';

function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        console.log("пусто");
        //return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    console.log(result);
    //return result;
}

fib(20);