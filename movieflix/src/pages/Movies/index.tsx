import './styles.css';


import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { SpringPage } from '../../types/vendor/spring';
import { Movie } from '../../types/movie';
import { requestBackend } from '../../util/requests';
import MovieCard from '../../components/MovieCard';
;

const Movies = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: "/movies",
      withCredentials: true,
      params: {
        page: 0,
        size: 2,
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, []);


  return (
    
      <div className="movie-container">
    

        {page?.content.map((movie)=> (
      
            <div className="movie-card" key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
            </div>
          )
        )}
      </div>
  
  );
};

export default Movies;