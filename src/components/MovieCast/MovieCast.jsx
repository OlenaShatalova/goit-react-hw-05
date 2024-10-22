import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../Loader/Loader';

import { getCastById } from '../../apiService/movies';
import { defaultImg } from '../../default/default';

import css from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();

  const [info, setInfo] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getCast = async () => {
      setLoader(true);
      try {
        const data = await getCastById(movieId);
        setInfo(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <>
      {error && <p>{error}</p>}
      <ul className={css.castList}>
        {info &&
          info.map(p => {
            return (
              <li key={p.cast_id} className={css.item}>
                <img
                  className={css.photo}
                  src={
                    p.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${p.profile_path}`
                      : defaultImg
                  }
                  width={100}
                  alt="poster"
                />
                <p className={css.name}>{p.name}</p>
                <p className={css.char}>Character: {p.character}</p>
              </li>
            );
          })}
      </ul>
      {loader && <Loader />}
    </>
  );
};

export default MovieCast;
