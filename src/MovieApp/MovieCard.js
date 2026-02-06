import { useState } from "react";
import "./MovieCard.css";
import {Link} from "react-router-dom";

const MovieCard = ({ movie }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link to={`Trailers/${el.name}`}>
    <div
      className="movie-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        transform: hover ? "rotateY(15deg) scale(1.1)" : "rotateY(0deg) scale(1)",
      }}
    >
      <img src={movie.posterURL} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <strong>⭐ {movie.rating}</strong>
    </div>
    </Link>
  );
};

export default MovieCard;
