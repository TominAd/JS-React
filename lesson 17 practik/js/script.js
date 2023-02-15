//доп задание 

'use strict';

function getTimeFromMinutes(minutesTotal) {
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    console.log(`Это ${hours} ${hoursStr} и ${minutes} минут`);
    //return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

getTimeFromMinutes(310);

function findMaxNumber(a, b ,c, d) {
    // Самое простое - это использовать Math.max :)
    // А оптимизировать такую проверку мы научимся совсем скоро
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        console.log(0)
            //return 0;
    } else {
       // return Math.max(a, b ,c, d);
       console.log(Math.max(a, b ,c, d));
    }
}

findMaxNumber(1, 5, 6.6, 10.5);
findMaxNumber(1, 5, 6, "10");