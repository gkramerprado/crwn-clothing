import React from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { connect } from 'react-redux';
import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import './checkout.styles.scss';

const Checkout = ({ cartItems, cartItemsTotal }) => {
    const headers = ['Produto', 'Descricao', 'Quantidade', 'Preco', 'Remover'];

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                {
                    headers.map((title, idx) => (
                        <div key={idx} className="header-block">
                            <span>{title}</span>
                        </div>
                    ))
                }
            </div>
            {
                cartItems.map(item => (
                    <CheckoutItem key={item.id} cartItem={item} />
                ))
            }
            <div className="total">
                <span>TOTAL: ${cartItemsTotal}</span>
            </div>
            <div className="test-warning">
                *Please use the following test card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/20 - CVV 123
            </div>
            <StripeCheckoutButton price={cartItemsTotal} />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartItemsTotal: selectCartItemsTotal
});

export default connect(mapStateToProps)(Checkout);