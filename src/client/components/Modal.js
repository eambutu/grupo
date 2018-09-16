import React, { Component } from 'react';
import '../styles/Card.css';


class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: props.show,
            name: '',
            venmo: '',
            size: '',
            top: '',
            price: props.price,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    
    handleSubmit() {
        var name = document.getElementById('name').value;
        var venmo = document.getElementById('venmo-handle').value;
        var size = document.getElementById('drink-size').value;
        var top = document.getElementById('drink-toppings').value;
        var data = {'name': name, 'venmo': venmo, 'size': size, 'toppings': top};
        console.log(data);
        this.props.updateState(data);
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        const showHideClassName = this.state.show ? "modal display-block" : "modal display-none";
        
        return (
            

                <div className={showHideClassName}>
                <section className="modal-main">
                <form className="pure-form pure-form-stacked">
                <div className='space-wrapper'>
                    <label forhtml="email">Name</label>
                    <input id="name" placeholder="Name" name='name' value={this.state.name} onChange={(e) => this.handleChange(e)}></input>
                </div>
                <div className='space-wrapper'>
                    <label forhtml="venmo-handle">Venmo Handle</label>
                    <input id="venmo-handle" type="venmo-handle" placeholder="Venmo Handle" name='venmo' value={this.state.venmo} onChange={(e) => this.handleChange(e)}></input>
                </div>
                <div className='space-wrapper'>     
                    <label forhtml="drink-size">Drink Size</label>
                    <select id="drink-size" name='size' value={this.state.size} onChange={(e) => this.handleChange(e)}>
                        <option>L</option>
                        <option>M</option>
                    </select>
                </div>
                <div className='space-wrapper'>
                    <label forhtml="drink-toppings">Drink Toppings</label>
                    <select id="drink-toppings" name='top' value={this.state.top} onChange={(e) => this.handleChange(e)}>
                        <option>Boba</option>
                        <option>Pudding</option>
                        <option>Aloe Jelly</option>
                    </select>
                </div>
                <div className='space-wrapper'>
                <button onClick={this.handleSubmit}>Order</button>
                </div>
                </form>
                
                <div className='space-wrapper'>
                    <button type='button' onClick={this.props.hideModal}>Cancel</button>
                    </div>
                </section>
                </div>

        );
    }
}


export default Modal
