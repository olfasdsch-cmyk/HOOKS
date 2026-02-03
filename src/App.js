import Navbarr from "./MovieApp/Navbarr";
import HeroSlider from "./MovieApp/HeroSlider";
import MoviesList from "./MovieApp/MoviesList";
import movies from "./MovieApp/moviesData";
import AddMovie from "./MovieApp/AddMovie";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#0f0f1a", color: "white" }}>
      <Navbarr />
      <HeroSlider movies={movies.slice(0, 5)} />
      <MoviesList movies={movies} />
      <AddMovie/>
    </div>
  );
}

export default App;
