import { Rating } from '../Rating'
import './RatingRange.scss'

export const RatingRange = () => {

  const handleClick = () => {
    console.log('hola');
  }
  return (
    <div className='rating-range'>
      <Rating onClick={handleClick} value='1' />
      <Rating onClick={handleClick} value='2' />
      <Rating onClick={handleClick} value='3' />
      <Rating onClick={handleClick} value='4' />
      <Rating onClick={handleClick} value='5' />
    </div>
  )
}
