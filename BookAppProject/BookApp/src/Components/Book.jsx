import React from 'react'
import './book.css'
import bookImage from '../assets/product-jpeg-500x500.webp'

function Book() {
  return (
    <div id='book'>
        <img src={bookImage} alt="" style={{height:"270px",width:"150px"}} />
        <h1>Maths</h1>
        <p>by Amankumar Jha</p>
        <span>Price: Rs.10</span>

    </div>
  )
}

export default Book