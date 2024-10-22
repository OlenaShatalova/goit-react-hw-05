import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Container from '../components/Container/Container';
import SearchForm from '../components/SearchForm/SearchForm';
import MoviesList from '../components/MoviesList/MoviesList';
import Loader from '../components/Loader/Loader';

import { getMoviesBySearch } from '../apiService/movies';
import Section from '../components/Section/Section';
import ParticlesBackground from '../components/ParticlesBackground/ParticlesBackground';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  const handleSubmit = search => {
    setSearchParams({ q: search });
    setError(null);
  };

  const searchValue = searchParams.get('q');

  useEffect(() => {
    if (!searchValue) return;

    const getMovies = async () => {
      setLoader(true);
      try {
        const dataMovies = await getMoviesBySearch(searchValue);
        setMovies(dataMovies);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    getMovies();
  }, [searchValue]);

  return (
    <>
      <Section>
        <Container>
          <SearchForm onSubmit={handleSubmit} />
          {error && <p>{error}</p>}
          {searchValue && (
            <>
              {movies.length !== 0 ? (
                <MoviesList movies={movies} />
              ) : (
                <p>
                  According to your request <b>{searchValue}</b>, nothing was
                  found
                </p>
              )}
            </>
          )}
          {loader && <Loader />}
          <ParticlesBackground />
        </Container>
      </Section>
    </>
  );
};

export default MoviesPage;
