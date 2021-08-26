import MoviesGrid from "./MoviesGrid";
import estilos from "../App.module.css"

function AppComp() {
    return (
        <div>
            <header>
                <h1 className={estilos.title}>Movies</h1>
            </header>

            <main>
                <MoviesGrid />
            </main>
        </div>
    );
}

export default AppComp;