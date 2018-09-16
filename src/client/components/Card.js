import React, { Component } from 'react';
import ReactImage from '../bubbletea.png';
import '../styles/Card.css';

class Card extends Component {
  render(props) {
    return (
    <div className="extra-space">
      <div className="outer-div">
        <div className="card-img-container">
          <img className="card-img" alt="random" src={ReactImage}></img>
        </div>
        <div className="flex-col">
          <div className='item-name'>Bubble Milk Tea</div>
          <div className='item-description'>Smooth, creamy, delicious. Three words for the perfect afternoon drink!</div>
        </div>
        <div className="flex-col2">
            <div className='item-price'>$5.00</div>
            <div className="button-buy">Buy</div>
        </div>
      </div>
    </div>
    );
  }
}

export default Card;
