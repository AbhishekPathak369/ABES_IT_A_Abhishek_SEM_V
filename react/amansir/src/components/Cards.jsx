import React from 'react';
import img1 from '../assets/im.png';
import './Card.css';

function Cards() {
  return (
    <div className="card">
      <img src={img1} alt="Panda" />
      <h1>Panda</h1>
    </div>
  );
}

export default Cards;