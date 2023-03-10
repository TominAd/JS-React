/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания
let number0fFilms;

function start () {
    number0fFilms = +prompt ("Сколько фильмов вы уже просмотрели?", "");

    while(number0fFilms == "" || number0fFilms == null || isNaN(number0fFilms)){
        number0fFilms = +prompt ("Сколько фильмов вы уже просмотрели?", "");
    }
}
start();

const personalMovieDB = {
    count: number0fFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

function rememberMyFilms(){
for (let i = 0; i < 2; i++){
    const a = prompt ("Один из последних фильмов?", ""),
          b = prompt ("На сколько его оцените?", "");

    if (a != null && b != null && a != " " && b != " " && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log("done");
    }else{
        console.log("error");
        i--;
    }
}
}

rememberMyFilms();

function detectPerconalLevel(){

if (personalMovieDB.count < 10 ){
    console.log("Посмотренно довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB < 30){
    console.log("Вы класический зритель");
} else if (personalMovieDB.count >= 30){
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}
}
detectPerconalLevel();

function showMyDB (hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


console.log(personalMovieDB);

function writeYourGenres(){
    for (let i = 1; i <= 3; i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();