import React, { Component } from 'react';
import '../styles/Cart.css';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartId: 0,
      orders: [
        {
          user: 'Jeff',
          items: [
            {
              name: 'Black milk tea',
              quantity: 2,
              size: 'M'
            },
          ]
        },
        {
          user: 'Allen',
          items: [
            {
              name: 'Green milk tea',
              quantity: 3,
              size: 'L'
            },
            {
              name: 'Black milk tea',
              quantity: 1,
              size: 'M'
            }
          ]
        }
      ]
    };
  }

  componentDidMount() {
    if (this.props.match.params.cartId) {
      this.setState({ cartId: this.props.match.params.cartId });
    }
  }

  render () {
    console.log(Object.values(this.state.orders)[0].user);
    return (
      <div>
        <div className="title">Link: {this.state.cartId}</div>
        <div className="button-container">
          <button className="button">Add Order</button>
        </div>
        <div>
          <table className="center">
            <tbody className="orders-table">
              {Object.values(this.state.orders).map(order => (
                <tr className="orders-row-container">
                  <div className="orders-row">
                    <td className="orders-element">
                      {order.user}
                    </td>
                    <td className="orders-element">
                      <table>
                        <tbody>
                          {Object.values(order.items).map(item => (
                            <tr>
                              {item.name}, {item.quantity}, {item.size}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Cart;
