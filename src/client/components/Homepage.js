import React, { Component } from 'react';
import '../styles/Homepage.css';

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.createCart = () => {
      fetch('http://localhost:8080/createCart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(res => res.json())
        .then((cart) => {
          console.log(cart);
          if (cart.success) {
            window.location = '/cart/' + cart.cartid;
          }
        });
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
