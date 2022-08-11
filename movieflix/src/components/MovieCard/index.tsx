import { Movie } from '../../types/movie';

import './styles.css'

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="base-card movie-card-container">

            <img src={movie.imgUrl} alt={movie.title} />

        <div className="movie-card-detail-container">
      <h4>{movie.title}</h4>
      <h5>{movie.year}</h5>
      <p>{movie.subTitle}</p>
      </div>
    </div>
  );
};

export default MovieCard;
