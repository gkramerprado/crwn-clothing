import React from 'react';

import { ReactComponent as ShopBagIcon } from '../../assets/shop-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, countItems }) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShopBagIcon className="shopping-icon"></ShopBagIcon>
            <span className="item-count">{countItems}</span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    countItems: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);