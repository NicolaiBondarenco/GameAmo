import React, { useState } from 'react'
import './CustomizeCharacterItem.scss'

export const CustomizeCharacterItem = ({ image }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const nameImg = isHovered
    ? 'customizeCharacterItem__innerImg-image active'
    : 'customizeCharacterItem__innerImg-image'

  return (
    <div className="customizeCharacterItem">
      <div
        className="customizeCharacterItem__innerImg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className={nameImg} src={image} alt="Photo" />
      </div>
      {/* {isHovered && <div className="customizeCharacterItem__hover"></div>} */}
    </div>
  )
}
