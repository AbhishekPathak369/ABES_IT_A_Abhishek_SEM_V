import React from 'react';
import img1 from '../assets/istockphoto-1681388313-612x612.jpg';
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
