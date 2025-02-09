import React from 'react'
import '../styles/Cards.css'

const Card = (data) => {
  return (
    <div className='card'>
        <div className="card_logo">
            <img src={`http://localhost:5173/src/assets/Img/${data.logo}`} alt="" />
        </div>
        <div className="card_data">
            <h2>{data.name}</h2>
         
        </div>
    </div>
  )
}


export default Card