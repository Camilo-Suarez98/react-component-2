import { useState } from 'react'
import { Rating } from '../Rating'
import './RatingRange.scss'

export const RatingRange = () => {
  const [ rating, setRating ] = useState(0)
  const [ selected, setSelected ] = useState(false)

  const handleClick = (selectedRating) => {
    setSelected(!selected)
    setRating(selectedRating)
  }

  return (
    <div className="rating-range">
      {
        [1, 2, 3, 4, 5].map(item => (
          <Rating
            key={item}
            isSelected={rating >= item ?? !selected}
            onClick={() => handleClick(item)}
            value={item}
          />
        ))
      }
    </div>
  )
}
