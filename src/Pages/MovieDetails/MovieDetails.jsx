import { fetchMoviesById } from 'Services/fetchAPI';
import { useEffect, useState } from 'react';
import {
  useParams,
  useLocation,
  useNavigate,
  Link,
  Outlet,
} from 'react-router-dom';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { genres, title, poster_path, vote_average, overview } = movie;

  useEffect(() => {
    if (!movieId) return;
    fetchMoviesById(movieId).then(data => setMovie(data.data));
  }, [movieId]);

  return (
    <>
      <div>
        <button
          className={css.buttonGoBack}
          onClick={() => {
            navigate(location?.state?.from ?? '/');
          }}
        >
          Go back
        </button>
      </div>
      {movie.length !== 0 && (
        <>
          <section className={css.movieSection}>
            <div className={css.movieContainer}>
              <img
                className={css.moviePoster}
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                height="450px"
              />
            </div>
            <div className={css.movieInfo}>
              <h2>{title}</h2>
              <p>User Score: {(vote_average * 10).toFixed()}%</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{genres.map(el => el.name).join(', ')}</p>
            </div>
          </section>
          <div className={css.addInfo}>
            <p>Additional information</p>
            <ul className={css.addInfoList}>
              <li className={css.addInfoItem}>
                <Link to="cast" state={location.state}>
                  Cast
                </Link>
              </li>
              <li className={css.addInfoItem}>
                <Link to="reviews" state={location.state}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;
