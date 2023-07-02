import React from 'react'
import './Rating.scss'

export const Rating = ({ onClick, value }) => {
  return (
    <div className='rating'>
      <div onClick={onClick}>{value}</div>
    </div>
  )
}
