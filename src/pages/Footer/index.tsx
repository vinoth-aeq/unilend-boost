import React, { useState } from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import Median from '../../assets/median.svg';
import Twitter from '../../assets/twitter.svg';
import Telegram from '../../assets/telegram.svg';
import Instagram from '../../assets/instagram.svg';
import './index.scss';

const Footer = () => {
  
  return(
	<div id="app">
	<Navbar collapseOnSelect expand="lg" className="Footer-Navbar-css">

    <Nav className="Footer-nav-auto">
      <Nav.Link href="#docs">Docs</Nav.Link>
      <Nav.Link href="#contactUs">Contact Us</Nav.Link>
    </Nav>

    <Nav className="Footer-navLink">
    <Nav.Link  href="#mediam"> <img  alt="Logo"  src={Median} className="median-logo"/></Nav.Link>
      <Nav.Link  href="#twitter"> <img  alt="Logo"  src={Twitter} className="twitter-logo"/></Nav.Link>
      <Nav.Link  href="#instagram"> <img  alt="Logo"  src={Instagram} className="instagram-logo"/></Nav.Link>
      <Nav.Link  href="#telegram"> <img  alt="Logo"  src={Telegram} className="telegram-logo"/></Nav.Link>
    </Nav>

</Navbar>
	</div>
  );
};

export default Footer;