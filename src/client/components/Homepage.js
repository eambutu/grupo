import React, { Component } from 'react';
import '../styles/Homepage.css';

class Homepage extends Component {
  render () {
    return (
      <div className="center">
        <div className="title">grupo</div>
        <div className="button-container">
          <button className="homepage-button">Create Order</button>
        </div>
      </div>
    );
  }
}

export default Homepage;
