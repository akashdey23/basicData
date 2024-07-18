import React from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const Card = ({img,title,desc,price,addToCart}) => {
  return (
    <div className='card'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <p>{desc}</p>
      <h3>{price}</h3>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default Card
