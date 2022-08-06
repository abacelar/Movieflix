import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewCard from '../../components/ReviewCard';
import ReviewForm from '../../components/ReviewForm';
import { Review } from '../../types/review';
import { hasAnyRoles, requestBackend } from '../../util/requests';

import './styles.css';

type UrlParams = {
  moviesId: string;
};

const ReviewsComponent = () => {
  const { moviesId } = useParams<UrlParams>();

  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${moviesId}/reviews`,
      withCredentials: true,
    };

    requestBackend(config).then((response) => {
      setReviews(response.data);
    });
  }, [moviesId]);


  const handleInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  };

  return (
    <>
      <div className="movie-detail-container">
        {<h1>Tela detalhes do filme id: {moviesId}</h1>}
        {hasAnyRoles(['ROLE_MEMBER']) && (<ReviewForm movieId={moviesId} onInsertReview={handleInsertReview} />)}
        <ReviewCard reviews={reviews} />
      </div>
    </>
  );
};

export default ReviewsComponent;
