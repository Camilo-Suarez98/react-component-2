import { useState } from 'react'
import './Card.scss'
import { Rating } from '../Rating'
import { ThanksCard } from '../ThanksCard'

export const Card = () => {
  const [ rating, setRating ] = useState(0)
  const [ selected, setSelected ] = useState(false)
  const [ showThanks, setShowThanks ] = useState(false)

  const handleClick = (selectedRating) => {
    setSelected(!selected)
    setRating(selectedRating)
  }

  const handleShow = (value) => {
    setShowThanks(value)
  }

  return (
    <>
    {
      showThanks ?
      
      <ThanksCard calification={rating} /> :

      <div className='card-rating'>
        <section className="icon">
          <img src="../../../public/icon-star.svg" alt="test" />
        </section>

        <div className="text">
          <h2>How did we do?</h2>
          <p>
            Please let us know how we did with your support request All feedback is appreciatedto help us to improve our offering.
          </p>
        </div>

        <div className='rating-buttons'>
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
        </div>
        
        <button onClick={() => handleShow(true)}>Submit</button>
      </div> 
    }
    </>
  )
}
