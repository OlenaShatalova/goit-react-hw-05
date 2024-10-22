import { useEffect, useState } from 'react';

import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import MoviesList from '../components/MoviesList/MoviesList';
import Loader from '../components/Loader/Loader';

import { getMoviesOnTrend } from '../apiService/movies';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setLoader(true);

      try {
        const results = await getMoviesOnTrend();
        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    getMovies();
  }, []);

  return (
    <Section>
      <Container>
        <h1 style={{ marginBottom: 15 }}>Trending Today</h1>
        {error && <p>{error}</p>}
        <MoviesList movies={movies} />
        {loader && <Loader />}
      </Container>
    </Section>
  );
};

export default HomePage;
