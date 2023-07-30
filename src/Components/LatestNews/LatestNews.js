import React from 'react'
import { Button } from '../../ui/Button/Button'
import { Future } from '../Future/Future'
import { LatestNewsItem } from '../LatestNewsItem/LatestNewsItem'
import { newsPhoto } from '../../Constants'

import './LatestNews.scss'

export const LatestNews = () => {
  return (
    <div className="latestNews">
      <div className="latestNews__info container">
        <div className="latestNews__info-wrapper">
          <Future />
          <h3 className="latestNews__info-wrapper--title">
            Latest News & Articles
          </h3>
        </div>
        <div>
          <Button title="Read More" bgc="#57B8FF" />
        </div>
      </div>
      <div className="latestNews__content container">
        {newsPhoto.map(({ photo, desc }, id) => (
          <LatestNewsItem
            key={id}
            photo={photo}
            data="April 2, 2021"
            desc={desc}
          />
        ))}
      </div>
    </div>
  )
}
