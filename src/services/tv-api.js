import axios from "axios";

const keyAPI = "dd522fd1fe6a41e9e74ad4802fcca167";
const baseURL = `https://api.themoviedb.org/3`;

const allMovies = async () => {
  return await axios
    .get(`${baseURL}/trending/all/day?api_key=${keyAPI}&language=en-US`)
    .then((responce) => responce.data.results);
};

const searchMovies = async (query) => {
  return await axios
    .get(
      `${baseURL}/search/movie?api_key=${keyAPI}&language=en-US&page=1&include_adult=true&query=${query}`
    )
    .then((responce) => responce.data.results);
};

const movieDetails = async (movie_id) => {
  return await axios
    .get(`${baseURL}/movie/${movie_id}?api_key=${keyAPI}&language=en-US`)
    .then((responce) => responce.data);
};

const movieCredits = async (movie_id) => {
  return await axios
    .get(`${baseURL}/movie/${movie_id}/credits?api_key=${keyAPI}`)
    .then((responce) => responce.data.cast);
};

const movieReviews = async (movie_id) => {
  return await axios
    .get(
      `${baseURL}/movie/${movie_id}/reviews?api_key=${keyAPI}&language=en-US&page=1`
    )
    .then((responce) => responce.data.results);
};

export default {
  allMovies,
  searchMovies,
  movieDetails,
  movieCredits,
  movieReviews,
};
