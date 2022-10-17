import React from "react";
import "./Stars.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const Stars = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className="stars">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i} >
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              size={70}
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Stars;
