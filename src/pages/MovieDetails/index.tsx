import axios from 'axios';
import ButtonIcon from 'components/ButtonIcon';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from 'types/movie';
import { BASE_URL } from 'util/requests';

import './styles.css';

type UrlParams = {
    movieId: string;
}

const MovieDetails = () => {
  const [movie, setMovie] = useState<Movie>();

  const { movieId } = useParams<UrlParams>();

  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${movieId}`).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  return (
    <>
      <div className="movie-detail-container">
        <h1>Tela detalhes do filme {movie?.id}</h1>
        <div className="avaliation-container">
          <input
            type="text"
            className="form-control base-input"
            placeholder="Deixe sua avaliação aqui"
            name="avaliation"
          />
          <div className="btn-container">
            <ButtonIcon text="Salvar Avaliação" />
          </div>
        </div>
        <div className="comments-container">
          <div className="comments-description">
            <h5>Maria silva</h5>
            <p>Gostei muito do filme</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
