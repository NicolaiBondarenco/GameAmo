import React, { useState } from 'react'
import { Navigation } from '../Navigation/Navigation'
import { BurgerBtn } from '../Burger/Burger'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu'
import { Cart } from '../Cart/Cart'

import logo from '../../Assets/images/logo.png'

import './Header.scss'

export const Header = () => {
  const [burger, setBurger] = useState(false)

  const onHandleMenu = () => {
    setBurger((prev) => !prev)
  }

  return (
    <div className="header">
      <div className="header__wrapper">
        <a className="logo" href="#">
          <img src={logo} alt="Logo" />
        </a>
        <Navigation />
        <div className="cartBlock">
          <Cart />
          <button className="cartBlock__btn">Contact Us</button>
        </div>
        <BurgerMenu toggleMenu={burger} />
        <BurgerBtn onHandleMenu={onHandleMenu} />
      </div>
    </div>
  )
}
