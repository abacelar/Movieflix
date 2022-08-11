import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewCard from '../../components/ReviewCard';
import ReviewForm from '../../components/ReviewForm';
import ReviewMovieCard from '../../components/ReviewMovieCard';
import { Movie } from '../../types/movie';
import { Review } from '../../types/review';
import { BASE_URL, hasAnyRoles, requestBackend } from '../../util/requests';
import { toast } from 'react-toastify';

import './styles.css';

type UrlParams = {
  moviesId: string;
};

const ReviewsComponent = () => {
  const { moviesId } = useParams<UrlParams>();

  const [movieDetails, setMovieDetails] = useState<Movie>();

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `${BASE_URL}/movies/${moviesId}`,
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      setMovieDetails(response.data);
    });
  }, [moviesId]);


  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${moviesId}/reviews`,
      withCredentials: true,
    };

    requestBackend(config).then((response) => {
      setReviews(response.data);
    })
    .catch(() => {
      toast.error('Erro ao enviar a sua avaliação')
    });
  }, [moviesId]);


  const handleInsertReview = (review: Review) => {
    const clone = [...reviews];
    toast.info('Avaliação enviada')
    clone.push(review);
    setReviews(clone);
  };

  return (
    <>
      <div className="movie-detail-container">
        <div>
        {movieDetails ? <ReviewMovieCard movie={movieDetails} /> : null}
        </div>
        {<h1>Tela detalhes do filme id: {moviesId}</h1>}
        {hasAnyRoles(['ROLE_MEMBER']) && (<ReviewForm movieId={moviesId} onInsertReview={handleInsertReview} />)}
        <ReviewCard reviews={reviews} />
      </div>
    </>
  );
};

export default ReviewsComponent;
