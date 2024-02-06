import React from 'react'
import demo from "../../IconsAndImages/backgroundImage.jpg"
const Musiccard = () => {
  return (
    <div>
      <div className="card">
        <img src={demo} alt="" />
        <h3>Song Title</h3>
        <p>Artist Name</p>
        <p>song description</p>
      </div>
    </div>
  )
}

export default Musiccard
