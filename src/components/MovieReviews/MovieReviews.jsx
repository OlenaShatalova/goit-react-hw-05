import { useParams } from 'react-router-dom';
import css from './MovieReviews.module.css';
import { useEffect, useState } from 'react';

import { getReviewById } from '../../apiService/movies';
import Loader from '../Loader/Loader';

const MovieReviews = () => {
  const { movieId } = useParams();

  const [info, setInfo] = useState({});
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getCast = async () => {
      setLoader(true);
      try {
        const data = await getReviewById(movieId);
        setInfo({ results: data.results, pages: data.total_pages });
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
      {info.pages ? (
        <ul className={css.list}>
          {info.results.map(r => (
            <li key={r.id} className={css.item}>
              <p className={css.author}>{r.author}</p>
              <time className={css.time}>
                {r.created_at.slice(0, 10).replace(/-/g, ' / ')}
              </time>
              <p className={css.content}>{r.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We donʼt have any reviews for this movie</p>
      )}

      {loader && <Loader />}
    </>
  );
};

export default MovieReviews;
