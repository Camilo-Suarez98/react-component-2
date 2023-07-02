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
    <div className='rating-range'>
      <Rating isSelected={rating >= 1 ?? !selected} onClick={() => handleClick(1)} value={1} />
      <Rating isSelected={rating >= 2 ?? !selected} onClick={() => handleClick(2)} value={2} />
      <Rating isSelected={rating >= 3 ?? !selected} onClick={() => handleClick(3)} value={3} />
      <Rating isSelected={rating >= 4 ?? !selected} onClick={() => handleClick(4)} value={4} />
      <Rating isSelected={rating >= 5 ?? !selected} onClick={() => handleClick(5)} value={5} />
    </div>
  )
}
