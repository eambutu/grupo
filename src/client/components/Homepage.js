import React, { Component } from 'react';
import '../styles/Homepage.css';

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.createCart = () => {
      // Some logic to go and create a cart, and should somehow return an ID
      window.location = '/cart/1';
    };
  }

  render() {
    return (
      <div className="center">
        <div className="title">grupo</div>
        <div className="button-container">
          <button className="homepage-button" onClick={this.createCart}>Create Order</button>
        </div>
      </div>
    );
  }
}

export default Homepage;
