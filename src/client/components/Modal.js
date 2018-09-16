import React, { Component } from 'react';



class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
        this.hideModal = this.hideModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    hideModal() {
        this.setState({ show: false });
      };
    
    handleSubmit() {
        console.log(this);
    }

    render() {
        const showHideClassName = this.state.show ? "modal display-block" : "modal display-none";
        
        return (
            

                <div className={showHideClassName}>
                <section className="modal-main">
                <form className="pure-form pure-form-stacked">
                <div className='space-wrapper'>
                    <label forhtml="email">Name</label>
                    <input id="email" type="email" placeholder="Name"></input>
                </div>
                <div className='space-wrapper'>
                    <label forhtml="venmo-handle">Venmo Handle</label>
                    <input id="venmo-handle" type="venmo-handle" placeholder="Venmo Handle"></input>
                </div>
                <div className='space-wrapper'>     
                    <label forhtml="drink-size">Drink Size</label>
                    <select id="drink-size">
                        <option>L</option>
                        <option>M</option>
                    </select>
                </div>
                <div className='space-wrapper'>
                    <label forhtml="drink-toppings">Drink Toppings</label>
                    <select id="drink-toppings">
                        <option>Boba</option>
                        <option>Pudding</option>
                        <option>Aloe Jelly</option>
                    </select>
                </div>
                <div className='space-wrapper'>
                <button onClick={this.handleSubmit} type="submit" className="pure-button pure-button-primary">Order</button>
                </div>
                </form>
                
                <div className='space-wrapper'>
                    <button onClick={this.handleClose}>Cancel</button>
                    </div>
                </section>
                </div>

        );
    }
}


export default Modal
