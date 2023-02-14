"use strict";
//функции доп урок

const usdCurr = 28;
const eurCurr = 32;
const discont = 0.9;

function convert(amount, curr){
    return curr * amount;
    
    //console.log(curr * amount);
}
function promotion (result){
    console.log(result * discont)
    
}
const res = convert(500, usdCurr)
promotion(res)

//promotion(convert(500, usdCurr))

//convert(500, usdCurr);
//convert(500, eurCurr);

function test(){
    for (let i = 0; i < 5; i++){
        console.log(i);
        if (i === 3) return
    }
    console.log("Done!")
}
test();


function doNothing(){};
console.log(doNothing() === undefined);