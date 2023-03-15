'use strict';
// Практика

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'mikey', 'Keyt'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], d = [],rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        }else if (i < 12) {
            d.push(arr[i]);
        }else {
            rest.push(arr[i]);
        }
    }
    console.log([a,b,c,d, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`])
    // return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
}

sortStudentsByGroups(students);