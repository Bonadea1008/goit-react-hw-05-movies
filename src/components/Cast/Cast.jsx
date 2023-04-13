import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastByMovieId } from 'Services/fetchAPI';
import css from '../Cast/Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  //   const { name, profile_path } = cast;

  useEffect(() => {
    if (!movieId) return;
    fetchCastByMovieId(movieId).then(data => setCast(data.data.cast));
  }, [movieId]);

  return (
    <>
      {cast.length !== 0 && (
        <section>
          <ul className={css.castList}>
            {cast.map(({ id, name, profile_path }) => {
              return (
                <li className={css.castItem} key={id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={name}
                    className={css.castImg}
                    width="150"
                  />{' '}
                  <p className={css.castName}>{name}</p>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </>
  );
};

export default Cast;
