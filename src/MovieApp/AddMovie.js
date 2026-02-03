import { useState } from "react";
import "./AddMovie.css";

export default function AddMovie() {
  const [movies, setMovies] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Add movie form fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");

  // Filter state
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const handleAddMovie = () => {
    if (!title || !description || !posterURL || !rating) return;

    setMovies([...movies, { title, description, posterURL, rating: Number(rating) }]);
    setTitle(""); setDescription(""); setPosterURL(""); setRating(""); setShowForm(false);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (
    <>
      {/* TOP BAR: Add card + Filters */}
      <div className="top-bar">
        {/* ADD CARD */}
        <div className="movie-card add-card" onClick={() => setShowForm(true)}>
          +
        </div>

        {/* FILTERS */}
        <div className="filter-container">
          <input
            type="text"
            placeholder="Search by title..."
            value={filterTitle}
            onChange={(e) => setFilterTitle(e.target.value)}
          />
          <input
            type="number"
            min="0"
            max="10"
            placeholder="Min rating"
            value={filterRating}
            onChange={(e) => setFilterRating(Number(e.target.value))}
          />
        </div>
      </div>

      {/* FORM CARD */}
      {showForm && (
        <div className="movie-card form-card">
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type="text" placeholder="Poster URL" value={posterURL} onChange={(e) => setPosterURL(e.target.value)} />
          <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <input type="number" min="0" max="10" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} />
          <button onClick={handleAddMovie}>Add Movie</button>
        </div>
      )}

      {/* MOVIE CARDS */}
      <div className="movies-container">
        {filteredMovies.map((movie, i) => (
          <div className="movie-card" key={i}>
            <img src={movie.posterURL} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <span>⭐ {movie.rating}</span>
          </div>
        ))}
      </div>
    </>
  );
}
