import React from 'react'
import Qr from "../images/image-qr-code.png"

function Card() {
  return (
    <div className='card'>
        <div className="CardImage">
            <img src={Qr} alt="Qr-code" />
        </div>
        <div className="cardBody">
            <h1>Improve your front-end skills by building projects</h1>
            <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
    </div>
  )
}

export default Card