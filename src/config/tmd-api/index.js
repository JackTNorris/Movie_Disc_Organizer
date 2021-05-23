const API_KEY = require('./api-key.json');

export const search = async (queryString) => {
  const response = await fetch(
    /*`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY.val}&language=en-US&query=${queryString}&page=1&include_adult=false`,*/
    'https://api.themoviedb.org/3/search/movie?api_key=08c25c0280cefc43f64c81fd79c03b8a&language=en-US&query=Avatar&page=1&include_adult=false'
  );
  const json = await response.json();
  return json.results.map((tmd_movie) => {
    return {
      title: tmd_movie.original_title,
      overview: tmd_movie.overview,
      poster_path: tmd_movie.poster_path,
    };
  });
};

export const posterURL = (posterPath) => {
  return `https://image.tmdb.org/t/p/w500/${posterPath}`;
};
