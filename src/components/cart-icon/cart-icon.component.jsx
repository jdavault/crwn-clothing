import React from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import { setToggleCartHidden } from '../../redux/cart/cart.actions'

const CartIcon = ({ setToggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={setToggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  setToggleCartHidden: () => dispatch(setToggleCartHidden())
});


const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
