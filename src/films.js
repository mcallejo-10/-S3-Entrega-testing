// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}
// getAllDirectors(movies);

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movie) => movie.director === director);
  console.log('EXERCICE 2 ->', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let directorArray = array.filter((movie) => movie.director === director);
  if (directorArray.length == 0) return 0;

  let result =
  Math.round((directorArray.reduce((a, b) => a + b.score, 0) /
    directorArray.length) * 100) / 100;
  console.log('EXERCICE 3 ->', result);
  return result;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let moviesArray = array.map((movie) => movie.title).sort();

  if (moviesArray.length > 20) moviesArray.splice(20);

  console.log('EXERCICE 4 ->', moviesArray);
  return moviesArray;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let moviesArray = array.map((movie) => {
    return {
      title: movie.title,
      year: movie.year
    };
  });

  moviesArray.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });

  console.log('EXERCICE 5 ->', moviesArray);
  return moviesArray;
}


// orderByYear(movies);
// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let categoryArray = array.filter(movies => movies.genre.some(item => item === genre));
  if (categoryArray.length == 0) return 0;
  
  let categoryAverage = Math.round((categoryArray.reduce((a, b) => a + b.score, 0) /
  categoryArray.length) * 100) / 100;

  console.log('EXERCICE 6 ->', categoryAverage);
  return categoryAverage;
}


// Exercise 7: Modify the duration of movies to minutes

function hoursToMinutes(array) {
  return array.map(element => {
    return {
      ...element,      
      duration: transformToMinutes(element.duration)
    };    
  });
}    

function transformToMinutes(duration) {
  let hours = 0;
  let minutes = 0
  let matchHours = duration.match(/(\d+)h/);
  let matchMinutes = duration.match(/(\d+)min/);
  if (matchHours) {
    hours = parseInt(matchHours[1]) * 60;
  }
  if (matchMinutes) {
  minutes = parseInt(matchMinutes[1]);
  }  
  console.log('Exercici 7 ->', hours + minutes)
  return hours + minutes;
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

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
    bestFilmOfYear
  };
}
