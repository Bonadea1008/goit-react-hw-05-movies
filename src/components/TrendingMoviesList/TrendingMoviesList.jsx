import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../Services/fetchAPI';

const TrendingMoviesList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(trendingMovies => {
      setTrendingMovies(trendingMovies.results);
    });
  }, []);

  return (
    <>
      {trendingMovies && (
        <div>
          <h1>Trending today</h1>
          <ul>
            {trendingMovies.map(({ id, title }) => {
              return (
                <li key={id}>
                  <Link to={`movies/${id}`}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default TrendingMoviesList;
