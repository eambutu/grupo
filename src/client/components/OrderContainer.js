import React, { Component } from 'react';
import Cart from './Cart.js';
import Selection from './Selection.js';

class OrderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curPage: 'cart',
      cartId: null,
      orders: null,
    };

    this.switchToOrder = () => {
      this.setState({ curPage: 'order' });
    };

    this.switchToCart = () => {
      this.setState({ curPage: 'cart' });
    };
  }

  componentDidMount() {
    const cartId = this.props.match.params.cartId;
    if (cartId) {
      this.setState({ cartId: cartId });
    }

    fetch('http://localhost:8080/getCart?cartid=' + cartId)
      .then(res => res.json())
      .then((response) => {
        this.setState({ orders: response[0].orders});
      });
  }

  render() {
    if (this.state.curPage === 'cart' && this.state.cartId && this.state.orders) {
      console.log(this.state.cartId);
      console.log(this.state.orders);
      return <Cart cartId={this.state.cartId} orders={this.state.orders} addOrder={this.switchToOrder}/>;
    } else if (this.state.curPage === 'order') {
      return <Selection onSubmit={this.switchToCart} />;
    } else {
      return <div></div>
    }
  }
}

export default OrderContainer;
