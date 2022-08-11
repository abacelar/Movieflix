import { Movie } from '../../types/movie';

import './styles.css';

type Props = {
  movie: Movie;
};

const ReviewMovieCard = ({ movie }: Props) => {
  return (
    <div className="review-movie-card-container">
      <img src={movie.imgUrl} alt={movie.title} />
      <div className= "review-movie-detail-container">
        <div className="review-movie-card-detail-container">
          <h4>{movie.title}</h4>
          <h5>{movie.year}</h5>
          <p>{movie.subTitle}</p>
        </div>
        <div className="review-movie-synopsis-container">
          <span>{movie.synopsis}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewMovieCard;
