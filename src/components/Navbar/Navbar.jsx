import React from 'react';

import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";

const Navbar = () => (
  <nav className='site__navbar'>
    <div className='site__navbar-logo'>
    <img src={images.boreaslogo} alt="brand__logo" />
    </div>
    <ul className='site__navbar-links'>
      <li className='link__opensans'><a href='#home'>Home</a></li>
      <li className='link__opensans'><a href='#about'>About</a></li>
      <li className='link__opensans'><a href='#menu'>Menu</a></li>
      <li className='link__opensans'><a href='#awards'>Awards</a></li>
      <li className='link__opensans'><a href='#contact'>Contact</a></li>
    </ul>
    <div className='site__navbar-login'>
      <a href="login" className='link__opensans'>Log in / Register</a>
      <div></div>
      <a href="/" className='link__opensans'>Book a table</a>
    </div>
    <div className='site__hiddentoggle'>
    <GiHamburgerMenu color='white' fontSize={27} onClick={() => ()}/>
    <ul className='site__navbar__toggle-links'>
      <li className='link__opensans'><a href='#home'>Home</a></li>
      <li className='link__opensans'><a href='#about'>About</a></li>
      <li className='link__opensans'><a href='#menu'>Menu</a></li>
      <li className='link__opensans'><a href='#awards'>Awards</a></li>
      <li className='link__opensans'><a href='#contact'>Contact</a></li>
    </ul>
    </div>
  </nav>
);

export default Navbar;
