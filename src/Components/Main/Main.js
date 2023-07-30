import React from 'react'
import { Future } from '../Future/Future'
import { SocialNetworks } from '../SocialNetworks/SocialNetworks'
import { Button } from '../../ui/Button/Button'

import mainImg from '../../Assets/images/mainImg.png'

import './Main.scss'

export const Main = () => {
  return (
    <div className="main">
      <div className="mainLeft">
        <div className="infoBox">
          <SocialNetworks />
          <div className="infoBox__base">
            <Future />
            <h1>Unleash the Next Generation of Gaming</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis,
              nec donec in morbi pulvinar. Enim non pulvinar neque.
            </p>
            <div className="infoBox__base-btn">
              <Button title="Explore More" bgc="#57B8FF" />
              <Button title="View our team" bgc="transparent" />
            </div>
          </div>
        </div>
      </div>
      <div className="mainRight">
        <img src={mainImg} alt="MainImg" />
      </div>
    </div>
  )
}
