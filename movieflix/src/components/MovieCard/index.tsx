import { Movie } from "../../types/movie";




type Props = {
    movie: Movie;
}


const MovieCard = ( {movie} : Props ) => {

    return (

       <p>{movie.title}</p>

    )
}

export default MovieCard