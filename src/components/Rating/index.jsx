import React from 'react'
import './Rating.scss'

export const Rating = ({ isSelected, onClick, value }) => {
  return (
    <>
      <div className={isSelected ? 'active' : 'rating'} onClick={onClick}>{value}</div>
    </>
  )
}
