import React, { Component } from 'react';
import ReactImage from '../bubbletea.png';
import '../styles/Card.css';
import Modal from './Modal.js';


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      price: '$5.00'
    }
    this.updateState = props.updateState
    this.popUp = this.popUp.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.checkModalState = this.checkModalState.bind(this);
  };


  hideModal() {
    this.setState({show: false});
  }

  popUp() {
    this.setState({show: true});
  }

  checkModalState() {
    return this.state.show ? 1 : 0;
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
            {this.state.show ? <Modal hideModal={this.hideModal} updateState={this.updateState} price={this.state.price} show={this.state.show} /> : null}
        </div>
      </div>
    </div>
    
    );
  }
}

export default Card;
