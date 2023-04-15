import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastByMovieId } from 'Services/fetchAPI';
import css from '../Cast/Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const NoImage =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/195px-No-Image-Placeholder.svg.png';

  useEffect(() => {
    if (!movieId) return;
    fetchCastByMovieId(movieId).then(data => setCast(data.data.cast));
  }, [movieId]);

  return (
    <>
      {cast.length !== 0 && (
        <section>
          <ul className={css.castList}>
            {cast.map(({ id, name, profile_path, character }) => {
              return (
                <li className={css.castItem} key={id}>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w500` + profile_path
                        : NoImage
                    }
                    alt={name}
                    className={css.castImg}
                    width="180"
                  />{' '}
                  <p className={css.castName}>{name}</p>
                  <p className={css.castName}> Character: {character}</p>
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
