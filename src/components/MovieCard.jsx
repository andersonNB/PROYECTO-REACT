import estilos from "../MovieCard.module.css"

function MovieCard({movie}){

    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path

    return(
    <li className={estilos.movieCard}>
    <img width={230} height={345}  className={estilos.movieImage} src={imageUrl} alt={movie.title} />
    <div>{movie.title}</div>
    </li>
    );

}

export default MovieCard;