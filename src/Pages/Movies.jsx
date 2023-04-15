import { fetchSearchMovie } from 'Services/fetchAPI';
import { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import css from './MovieDetails/MovieDetails.module.css';

const Movies = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [movieTitle, setMovieTitle] = useState('');
  const [searchParams, setSearchParams] = useSearchParams('');
  const searchQuery = searchParams.get('query') ?? '';
  const NoImage =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/195px-No-Image-Placeholder.svg.png';
  const location = useLocation();

  const updateQueryString = ({ target }) => {
    if (target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: target.value });
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    setMovieTitle(e.target.elements.query.value);
  };

  useEffect(() => {
    if (!movieTitle) return;
    fetchSearchMovie(movieTitle).then(data =>
      setSearchMovie(data.data.results)
    );
  }, [movieTitle]);

  return (
    <>
      <form onSubmit={handleSearchSubmit}>
        <label htmlFor="">
          <input
            type="text"
            name="query"
            onChange={updateQueryString}
            value={searchQuery}
          ></input>
        </label>
        <button type="submit">Search</button>{' '}
      </form>
      {searchMovie && (
        <ul>
          {searchMovie.map(({ id, poster_path, title }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  <img
                    className={css.moviePoster}
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : NoImage
                    }
                    alt={title}
                    height="450px"
                  />
                  <h2>{title}</h2>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Movies;
