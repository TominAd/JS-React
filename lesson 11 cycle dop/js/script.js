"use strict";
//цикл внутри цикла и ментки

for (let i = 0; i < 3; i++){
    console.log(i);
    for (let j = 0; j < 3; j++){
        console.log(j);
    }
}

// *
// **
// ***
// ****
// *****
// ******

// let rezult = "";
// const length = 7;

// for (let i = 1; i < length; i++){
    
//     for (let j = 0; j < i; j++){
//         rezult += "*";
//     }

//     rezult += "\n"
// }

console.log(rezult);

first: for (let i = 0; i < 3; i++){
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++){
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++){
            if (k ===2) break first;
           // if (k ===2) continue first;
            console.log(`Third level: ${k}`);
        }
    }
}

for (let i = 5; i <= 10; i++){
    console.log(i);
    
}

for (let i = 20; i >= 10; i--){
     if (i===13) break;
    console.log(i);
    
}

for (let i = 2; i <= 10; i++){
    if (i % 2 === 0){
   console.log(i);
    }
}

let rezult = "";
const lines = 5;

for (let i = 0; i <= lines; i++){
    
    for (let j = 0; j < lines - i; j++){
        rezult += " ";
    }
    
    for (let j = 0; j < 2 * i + 1; j++){
        rezult += "*";
    }

    rezult += "\n"
}

console.log(rezult);