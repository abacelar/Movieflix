import './styles.css';

import { Movie } from 'types/movie';
import MovieCard from 'components/MovieCard';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SpringPage } from 'types/vendor/spring';
import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from 'util/requests';

const Movies = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: "/movies",
      baseURL: BASE_URL,
      params: {
        page: 0,
        size: 12,
      },
    };

    axios(params).then((response) => {
      setPage(response.data);
    });
  }, []);


  return (
    
      <div className="movie-container">
    

        {page?.content.map((movie)=> (
      
            <div className="movie-card" key={movie.id}>
            <Link to="/movies/1">
              <MovieCard movie={movie} />
            </Link>
            </div>
          )
        )}
      </div>
  
  );
};

export default Movies;
