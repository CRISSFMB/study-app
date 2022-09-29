import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'


const Stars = () => {
    //Stars state
    const [rating, setRating] = useState(0) // initial rating value
    const handleRating = (rate) => {
      setRating(rate)
    }
  
    return (
      <div className='App'>
        <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ />
      </div>
    )
};

export default Stars;
