import movies from "../movies.json"
import MovieCard from "./MovieCard";
import estilosGird from "../MoviesGrid.module.css"

function MoviesGrid() {
    console.log(movies)
    return (
        <ul className={estilosGird.moviesGrid}>
            {movies.map((Objmovie) =>
                <MovieCard key={Objmovie.id} movie={Objmovie}></MovieCard>
            )}
        </ul>
    );

}

export default MoviesGrid;