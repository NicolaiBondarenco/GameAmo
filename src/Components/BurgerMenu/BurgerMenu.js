import React from 'react'
import './BurgerMenu.scss'

export const BurgerMenu = ({ toggleMenu }) => {
  const name = toggleMenu ? 'burgerMenu active' : 'burgerMenu'

  let scroll = document.body

  if (!toggleMenu) scroll.style.overflow = 'scroll'
  if (toggleMenu) scroll.style.overflow = 'hidden'

  return (
    <ul className={name}>
      <li className="burgerMenu__item">
        <a href="#">Home</a>
      </li>
      <li className="burgerMenu__item">
        <a href="#">About</a>
      </li>
      <li className="burgerMenu__item">
        <a href="#">Team</a>
      </li>
      <li className="burgerMenu__item">
        <a href="#">Shop</a>
      </li>
      <li className="burgerMenu__item">
        <a href="#">Pages</a>
      </li>
    </ul>
  )
}
