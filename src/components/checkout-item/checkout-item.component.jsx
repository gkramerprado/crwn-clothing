import React from 'react';

import { clearItemFromCart, removeItemQty, addItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItemQty }) => {
    const { name, imageUrl, price, qty } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItemQty(cartItem)}>&#10094;</div>
                <span className="value">{qty}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={() => clearItemFromCart(cartItem)}>&#10005;</span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    removeItemQty: item => dispatch(removeItemQty(item)),
    addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);