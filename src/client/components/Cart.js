import React from 'react';
import '../styles/Cart.css';

export default function Cart(props) {
  return (
    <div>
      <div className="title">Link: {props.cartId}</div>
      <div className="button-container">
        <button className="button" onClick={props.addOrder}>Add Order</button>
      </div>
      <div>
        <table className="center">
          <tbody className="orders-table">
            {Object.values(props.orders).map(order => (
              <tr className="orders-row-container">
                <div className="orders-row">
                  <td className="orders-element">
                    {order.name}, Venmo: @{order.venmo}
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
