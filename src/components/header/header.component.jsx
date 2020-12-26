import React from 'react'
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
        </div>
    </div>
)

export default Header

//Old - https://www.airbnb.com/hosting/reservations/details/HMXY3NYYY4
//1/2 to 1/30

//New -  https://www.airbnb.com/hosting/reservations/details/HM5EMPCMWA 
//1/14 to 2/12

