import Movie from "../../common/Movie";
const API_KEY: {val: string} = require('./api-key.json');

export const fetchMovies = async (query: string): Promise<Movie[]> => {
    const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY.val}&language=en-US&query=${query}&page=1&include_adult=false`,
      );
      const json = await response.json();
      return json.results.map((tmd_movie: any): Movie => {
        return {
          title: tmd_movie.original_title,
          overview: tmd_movie.overview,
          poster_path: tmd_movie.poster_path,
        };
      });
};
export const fetchMovie = async () => {
    
};
