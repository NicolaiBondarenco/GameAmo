import React from 'react'

import './NavigationItem.scss'

export const NavigationItem = ({ title }) => {
  return (
    <li className="navigationItem">
      <a href="#">{title}</a>
    </li>
  )
}
