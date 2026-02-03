import { useRef } from "react";
import MovieCard from "./MovieCard";
import "./MoviesList.css";

const MoviesList = ({ movies }) => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="movies-section">
      <h2>Best Movies</h2>
      <button className="carousel-arrow left" onClick={() => scroll("left")}>
        &#10094;
      </button>
      <button className="carousel-arrow right" onClick={() => scroll("right")}>
        &#10095;
      </button>
      <div className="movies-carousel" ref={carouselRef}>
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
