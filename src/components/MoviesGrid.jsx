import movies from "../movies.json"
import MovieCard from "./MovieCard";

function MoviesGrid() {
    console.log(movies)
    return (
        <ul>
            {movies.map((Objmovie) =>
                <MovieCard key={Objmovie.id} movie={Objmovie}></MovieCard>
            )}
        </ul>
    );

}

export default MoviesGrid;