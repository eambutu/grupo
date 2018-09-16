import React, { Component } from 'react';
import '../styles/Selection.css';
import Card from './Card';



class Selection extends Component {

    constructor(props) {
        super(props);
        this.updateState = this.updateState.bind(this);
        this.state = {
            orders: [],
            total_cost: 0,
            menuItems: [
                {
                    name: 'Bubble Milk Tea',
                    description: "Smooth, creamy, delicious. Three words for the perfect afternoon drink!",
                    price: "$5.00",
                    img: '../bubbletea.png',
                },
                {
                    name: 'Bubble Milk Tea',
                    description: "Smooth, creamy, delicious. Three words for the perfect afternoon drink!",
                    price: "$5.00",
                    img: '../bubbletea.png',
                },
                {
                    name: 'Bubble Milk Tea',
                    description: "Smooth, creamy, delicious. Three words for the perfect afternoon drink!",
                    price: "$5.00",
                    img: '../bubbletea.png',
                },
                {
                    name: 'Bubble Milk Tea',
                    description: "Smooth, creamy, delicious. Three words for the perfect afternoon drink!",
                    price: "$5.00",
                    img: '../bubbletea.png',
                },
                {
                    name: 'Bubble Milk Tea',
                    description: "Smooth, creamy, delicious. Three words for the perfect afternoon drink!",
                    price: "$5.00",
                    img: '../bubbletea.png',
                },
                {
                    name: 'Bubble Milk Tea',
                    description: "Smooth, creamy, delicious. Three words for the perfect afternoon drink!",
                    price: "$5.00",
                    img: '../bubbletea.png',
                },
                {
                    name: 'Bubble Milk Tea',
                    description: "Smooth, creamy, delicious. Three words for the perfect afternoon drink!",
                    price: "$5.00",
                    img: '../bubbletea.png',
                },
            ]
        }
        this.addOrder = () => {
            fetch('http://localhost:8080/addOrder', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.orders)
            });
            this.props.onSubmit();
        }
    }

    updateState(order) {
        var newArray = this.state.orders.slice();
        newArray.push(order);
        var number = Number(order.price.replace(/[^0-9.-]+/g,""));
        var newCost = this.state.total_cost + number;
        this.setState({total_cost: newCost});
        this.setState({orders: newArray});
    }

    render(props) {
        return(
            <div className="shell">
                <div className="title">Order from Kung Fu Tea</div>
                <div className = "flex-body">
                    {Object.values(this.state.menuItems).map((item, index) => (
                        <Card key={index} updateState={this.updateState} name={item.name} description={item.description} price={item.price} img={item.img}>
                        </Card>
                    ))}
                </div>
                <div className="button-container">
                  <button className="button" onClick={this.addOrder}>Submit</button>
                </div>
            </div>
        );
    }
}

export default Selection;
