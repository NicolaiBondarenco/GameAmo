import React from 'react'

import { NavigationItem } from '../NavigationItem/NavigationItem'
import { menu } from '../../Constants'

import './Navigation.scss'

export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {menu.map((item, id) => (
          <NavigationItem key={id} title={item} />
        ))}
      </ul>
    </nav>
  )
}
