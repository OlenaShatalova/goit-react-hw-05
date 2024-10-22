import axios from 'axios';

const moviesInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjkyZWE0MDhhNzdkNzVhMGRjZDQ2ZmQ1MWI3NGJiOSIsIm5iZiI6MTcyOTI4Mjc0My4zNTU2MTEsInN1YiI6IjY3MTJiZTYxMTZjYWE4YjBmMDljNmMyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ywZejKBEedyJ3PG5V0ykCfgcRUYUkhZobzjNA8DSPrY',
  },
  params: {
    include_adult: false,
    language: 'en-US',
  },
});

export const getMoviesOnTrend = async () => {
  const { data } = await moviesInstance.get(`/trending/movie/day`);
  return data.results;
};

export const getMoviesBySearch = async query => {
  const { data } = await moviesInstance.get(`/search/movie`, {
    params: { query },
  });
  return data.results;
};

export const getMoviesById = async id => {
  const { data } = await moviesInstance.get(`/movie/${id}`);
  return data;
};

export const getCastById = async id => {
  const { data } = await moviesInstance.get(`/movie/${id}/credits`);
  return data;
};

export const getReviewById = async id => {
  const { data } = await moviesInstance.get(`/movie/${id}/reviews`);
  return data;
};
