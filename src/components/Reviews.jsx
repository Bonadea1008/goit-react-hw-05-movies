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
      {reviews.length !== 0 ? (
        <section>
          <ul>
            {reviews.map(({ id, author, content }) => {
              return (
                <li key={id}>
                  <h3>Author: {author}</h3>
                  <p>{content}</p>
                </li>
              );
            })}
          </ul>
        </section>
      ) : (
        <p>We don'/t have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
