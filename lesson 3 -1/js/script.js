"use sctrict";

const arr = [1, 2, 3]; //массивы
arr[10] = "3456";


console.log(arr);

//объекты
const arrObj = {
    0: "a",
    1: "b",
    2: "c",
    abc: {
        df:[ {}, {}],
        def:{

        }
    }
};

arrObj.b = "1234";

console.log(arrObj["b"]);
console.log(arrObj.b);

const obj = {
    "Anna": 500,
    "Alice": 800



}; 
