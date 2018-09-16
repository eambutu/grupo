import React, { Component } from 'react';
import '../styles/Selection.css';
import Card from './Card';



class Selection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectionId: 0,
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
    }

    componentDidMount() {
        if (this.props.match.params.cartId) {
          this.setState({ cartId: this.props.match.params.cartId });
        }
    }

    render(props) {
        return(
            <div className="shell">
                <div className="title">Order from Kung Fu Tea</div>
                <div className = "flex-body">
                    {Object.values(this.state.menuItems).map((item, index) => (
                        <Card key={index} name={item.name} description={item.description} price={item.price} img={item.img}>
                        </Card>
                    ))}
                </div>
            </div>
        );
    }
}

export default Selection;