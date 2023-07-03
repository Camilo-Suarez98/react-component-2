import React from 'react'
import './ThanksCard.scss'

export const ThanksCard = ({ calification }) => {
  return (
    <div className='card-thanks'>
      <section>
        <img src="../../../public/illustration-thank-you.svg" alt="test" />
        <p className='total-calification'>You selected { calification } of 5</p>
      </section>
      <div className="text">
        <h2>Thank You</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  )
}
