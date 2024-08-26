import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRatings = ({setStar}) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);

    const handleClick = (ratingValue) => {
        setRating(ratingValue);
        setStar(ratingValue);
    };

    return (
    <div style={{ display: 'flex' }}>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <FaStar
                color={ratingValue <= (hover || rating) ? "gold" : "lightgray"}
                size={20}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                onClick={() => handleClick(ratingValue)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRatings;