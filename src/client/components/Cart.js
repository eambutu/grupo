import React, { Component } from 'react';
import '../styles/Cart.css';

class Cart extends Component {
  render () {
    return (
      <div>
        <div className="title">Link: </div>
        <div className="button-container">
          <button className="button">Add Order</button>
        </div>
      </div>
    );
  }
}

export default Cart;
