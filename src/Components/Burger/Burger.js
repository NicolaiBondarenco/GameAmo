import React from 'react'
import './Burger.scss'

export const BurgerBtn = ({ onHandleMenu }) => {
  return (
    <button onClick={() => onHandleMenu()} className="burger">
      <div className="burger__lineTop"></div>
      <div className="burger__lineBottom"></div>
    </button>
  )
}
