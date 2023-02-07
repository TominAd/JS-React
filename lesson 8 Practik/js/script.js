
//
const number0fFilms = +prompt ("Сколько фильмов вы уже просмотрели?", "");

const personalMovieDB = {
    count: number0fFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

const a = prompt ("Один из последних фильмов?", ""),
      b = prompt ("На сколько его оцените?", ""),
      c = prompt ("Один из последних фильмов?", ""),
      d = prompt ("На сколько его оцените?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
 
console.log(personalMovieDB);