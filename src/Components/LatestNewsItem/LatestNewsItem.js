import React from 'react'
import './LatestNewsItem.scss'

export const LatestNewsItem = ({ photo, desc, data }) => {
  return (
    <div className="latestNewsItem">
      <a href="#">
        <img className="latestNewsItem__image" src={photo} alt="Photo" />
      </a>
      <h5 className="latestNewsItem__data"> {data} </h5>
      <p className="latestNewsItem__desc"> {desc} </p>
    </div>
  )
}
