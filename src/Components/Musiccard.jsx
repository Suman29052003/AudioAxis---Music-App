import React from 'react'

const Musiccard = (props) => {

  return (
    <div>
      <div className="card">
        <img src={props.imgSrc} alt="" />
        <h3>{props.title}</h3>
        <p>{props.artist}</p>
        <p>song description</p>
        <audio src={props.audioSrc} controls></audio>
      </div>
    </div>
  )
}

export default Musiccard
