//доп задание 
/*
формула объема куба Объем куба вычисляется по формуле V = a³, читаем формулу так : "V равен а в кубе ", где V - обозначен объем, а - длина ребра куба.

*/
'use strict';

function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;

    volume = length * length * length;
    // length ** 3 - это тоже самое, что и выше или варианты через цикл.
    // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
    area = 6 * (length * length);

    console.log(`Объем куба: ${volume}, площадь всей поверхности: ${area}`);
    //return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(5);

function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        //return "Ошибка. Проверьте правильность введенного номера места";
        console.log("Ошибка. Проверьте правильность введенного номера места");
    }else if (seatNumber === 0 || seatNumber > 36) {
        console.log("Таких мест в вагоне не существует");
        //return "Таких мест в вагоне не существует";
    } else{

    console.log(Math.ceil(seatNumber / 4));
    //return Math.ceil(seatNumber / 4);
    
    }

}

getCoupeNumber(12);