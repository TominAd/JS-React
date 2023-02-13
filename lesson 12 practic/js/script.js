"use strict";
//

const number0fFilms = +prompt ("Сколько фильмов вы уже просмотрели?", "");

const personalMovieDB = {
    count: number0fFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};


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

if (personalMovieDB.count < 10 ){
    console.log("Посмотренно довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB < 30){
    console.log("Вы класический зритель");
} else if (personalMovieDB.count >= 30){
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}


console.log(personalMovieDB);