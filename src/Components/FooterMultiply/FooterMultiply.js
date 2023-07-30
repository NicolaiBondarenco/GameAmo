import React from 'react'
import { FooterItem } from '../FooterItem/FooterItem'

import './FooterMultiply.scss'

export const FooterMultiply = ({ arr, title }) => {
  return (
    <div className="footerMultiply">
      <h6>{title}</h6>
      <ul>
        {arr.map((item, id) => (
          <FooterItem key={id} title={item} />
        ))}
      </ul>
    </div>
  )
}
