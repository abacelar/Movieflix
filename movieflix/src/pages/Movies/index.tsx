import './styles.css';

import { Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { SpringPage } from '../../types/vendor/spring';
import { Movie } from '../../types/movie';
import { requestBackend } from '../../util/requests';
import MovieCard from '../../components/MovieCard';
import Pagination from '../../components/Pagination';
import MovieFilter, { MovieFilterData } from '../../components/MovieFilter';


type ControlComponentsData = {
  activePage: number;
  filterData: MovieFilterData;
}

const Movies = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  const [controlComponentsData, setControlComponentsData] = useState<ControlComponentsData>(
  {
    activePage: 0,
    filterData: { genre: null },
  }
  );

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({activePage: pageNumber, filterData: controlComponentsData.filterData});
  }

  const handleSubmitFilter = (data: MovieFilterData) => {
    setControlComponentsData({ activePage: 0, filterData: data });
  };
  
  const getMovies = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
      params: {
        page: controlComponentsData.activePage,
        size: 4,
        genreId: controlComponentsData.filterData.genre?.id
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

 

  return (
    <div className= "my-4 movie-catalog-filter-container">
      <MovieFilter onSubmitFilter={handleSubmitFilter} />
    <div className="row movie-container">
      {page?.content.map((movie) => (
        <div className="col-sm-6 col-lg-6 col-xl-3 movie-card" key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        </div>
      ))}
      <Pagination
        pageCount={page ? page.totalPages : 0}
        range={3}
        onChange={handlePageChange}
      />
    </div>
    </div>
  );
};

export default Movies;
