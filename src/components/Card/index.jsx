import { useState } from 'react'
import './Card.scss'
import { RatingRange } from '../RatingRange'

export const Card = () => {
  return (
    <div className='card-rating'>
      <span className="icon">
        <img src="../../../public/icon-star.svg" alt="test" />
      </span>
      <div className="text">
        <h2>How did we do?</h2>
        <p>Please let us know how we did with your support request All feedback is appreciatedto help us to improve our offering</p>
      </div>
      <form className="rating-buttons">
        <RatingRange />
        <button>Submit</button>
      </form>
    </div>
  )
}
