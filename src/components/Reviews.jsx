import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsByMovieId } from 'Services/fetchAPI';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    fetchReviewsByMovieId(movieId).then(data => setReviews(data.data.results));
  }, [movieId]);

  return (
    <>
      {reviews.length !== 0 && (
        <section>
          <ul>
            {reviews.map(({ id, author, content }) => {
              return (
                <li key={id}>
                  <h2>{author}</h2>
                  <p>{content}</p>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </>
  );
};

export default Reviews;
