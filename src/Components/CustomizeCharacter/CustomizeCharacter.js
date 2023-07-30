import React from 'react'

import { Future } from '../Future/Future'
import { CustomizeCharacterItem } from '../CustomizeCharacterItem/CustomizeCharacterItem'
import { photo } from '../../Constants'

import './CustomizeCharacter.scss'

import characterMain from '../../Assets/images/customizeCharacter.png'

export const CustomizeCharacter = () => {
  return (
    <div className="customizeCharacter">
      <div className="customizeCharacter__wrapper container">
        <div className="customizeCharacter__left">
          <img src={characterMain} alt="CharacterMain" />
        </div>
        <div className="customizeCharacter__right">
          <Future />
          <h2 className="customizeCharacter__right-title">
            Customize Your Own Character
          </h2>
          <p className="customizeCharacter__right-desc">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae.
          </p>
          <div className="wrapper">
            {photo.map((item, id) => (
              <CustomizeCharacterItem key={id} image={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
