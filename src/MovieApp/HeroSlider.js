import { useEffect, useState } from "react";
import "./HeroSlider.css";

const HeroSlider = ({ movies }) => {
  const [current, setCurrent] = useState(0);

  // useEffect called unconditionally
  useEffect(() => {
    if (!movies || movies.length === 0) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % movies.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [movies]);

  if (!movies || movies.length === 0) return <p style={{ padding: "20px" }}>No movies to show</p>;

  const slide = movies[current];

  return (
    <div
      style={{
        height: "60vh",
        width: "100%",
        backgroundImage: `url(${slide.posterURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "flex-end",
        color: "white",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "600px",
        }}
      >
        <h1>{slide.title}</h1>
        <p>{slide.description}</p>
        <strong>⭐ {slide.rating}</strong>
      </div>
    </div>
  );
};

export default HeroSlider;
