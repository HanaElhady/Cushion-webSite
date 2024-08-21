import React, { useState } from 'react';
import logo from '../../img/logo.png';
import cart from '../../img/cart.png';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { Link as ScrollLink } from 'react-scroll';
import { useSelector } from 'react-redux';
import Cart from '../../pages/Cart/Cart';
export default function NavBar({ isPage }) {

const numOfCushions = useSelector((state) => state.numOfCushions); 
const [cartShown , setCartShown]= useState(false);

const toggleCart = () => setCartShown(!cartShown);

  return (
    <>
    <div className='navBar'>
      <div className="navLogo">
        <img src={logo} alt='logo'/>
      </div>
      <div className="nav-bar-link">
        <div className='toBeDissappered'>
        <Link to="/">Home</Link>
        {isPage ? (
          <Link to="/#aboutSection">About me</Link>
        ) : (
          <ScrollLink to="aboutSection" smooth={true} duration={1000}>
            About me
          </ScrollLink>
        )}
        <Link to='/Products'>Products</Link>
        {isPage ? (
          <Link to="/#contactSection">Contact me</Link>
        ) : (
          <ScrollLink to="contactSection" smooth={true} duration={1000}>
            Contact me
          </ScrollLink>
        )}
        </div>
        <div>
        <button onClick={toggleCart} className='cartButton'>
        <div className='cart'>
          <img src={cart} alt='cart'/>
          <div className="cartState">
           {numOfCushions}{/* Display the number of cushions */}
          </div>
          </div>
          </button>
        </div>
      </div>
    </div>
    {cartShown && <Cart onClose={toggleCart} />}
    </>
  );
}
