import React from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss';

import { connect } from 'react-redux';
import { setToggleCartHidden } from '../../redux/cart/cart.actions'

const CartIcon = ( { setToggleCartHidden }) =>   (
    <div className='cart-icon' onClick={setToggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>        
 )

const mapDispatchToProps = dispatch => ({
  setToggleCartHidden: () => dispatch(setToggleCartHidden())
});


export default connect(
  null, 
  mapDispatchToProps
)(CartIcon);