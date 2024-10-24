import { Link, useLocation } from 'react-router-dom';

import List from '../List/List';
import ListItem from '../ListItem/ListItem';
import ParticlesBackground from '../ParticlesBackground/ParticlesBackground';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <List>
        {movies.map(movie => (
          <ListItem key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </ListItem>
        ))}
      </List>
      <ParticlesBackground />
    </>
  );
};

export default MoviesList;
