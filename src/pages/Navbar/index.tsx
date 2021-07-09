import React, { useState } from 'react';
import Switch from "react-switch";
import {Navbar,Nav,Button} from 'react-bootstrap'
import UboostLogo from "../../assets/uLogo.svg";
import './index.scss';

const NavBar = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };

  return(
	<div id="app">
	<Navbar className="Navbar-css"
  collapseOnSelect expand="lg" >
      <Navbar.Brand  className="header-title" href="#home">
        <img
          alt="Logo"
          src={UboostLogo}
          className="header-logo"
        />{' '}
      Uboost
      </Navbar.Brand>
   
    <Nav className="navLink-css">
     <Nav.Link href="#selectChain" ><Button variant="primary" className="select-btn">Select Chain</Button></Nav.Link>
      <Nav.Link href="#connect"> <Button className="connect-wallet-btn">Connect wallet</Button></Nav.Link>
      <Nav.Link >
      <Switch
          onChange={handleChange}
          checked={checked}
          uncheckedIcon={false}
          checkedIcon={false}
          onColor="#fff"
          onHandleColor="#FED330"
          height={30}
          width={55}
          
          className="react-switch"
        />
      </Nav.Link>
    </Nav>
    
</Navbar>
	</div>
  );
};

export default NavBar;