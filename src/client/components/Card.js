import React, { Component } from 'react';
import ReactImage from '../bubbletea.png';
import '../styles/Card.css';
import Modal from './Modal.js';


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      show: false,
      price: '$5.00'
    }
    this.updateState = this.updateState.bind(this);
    this.popUp = this.popUp.bind(this);
    
  };

  updateState(order) {
    this.setState({data: order})
  }

  popUp() {
    this.setState({show: true})
  }


  
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
            <div className='item-price'>{this.state.price}</div>
            <button onClick={this.popUp} className="button-buy">Buy</button>
            {this.state.show ? <Modal price={this.state.price} show={this.state.show} /> : null}
        </div>
      </div>
    </div>
    
    );
  }
}

export default Card;
