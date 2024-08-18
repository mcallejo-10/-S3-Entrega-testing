// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(movie => (movie.director))
  console.log("EXERCICE 1 ->", result);
  return result;
}
// getAllDirectors(movies); 

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movie) => movie.director === director);
  console.log("EXERCICE 2 ->", result);
  return result;
}


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let directorArray = array.filter(movie => movie.director === director)
  if (directorArray.length == 0) return 0;
  
  let result = (directorArray.reduce((a, b) => a + b.score, 0).toFixed(2)) / directorArray.length;
  console.log("EXERCICE 3 ->", result);
  return result
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {
  
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {
  
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {
  
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
