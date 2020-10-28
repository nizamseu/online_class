import React from 'react';
import { Navbar } from 'react-bootstrap';
import './menu.css'
const Menu = () => {
    return (
        <div>
    <Navbar className="menu" bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="#home">
            {/* <p> পিংপাংপুং চিংচাংচুং </p> */}
            <p>PingPangPong ChingChangChong</p>
            <h6 className="menuLogo">Online Class</h6>
        </Navbar.Brand>
  </Navbar>
        </div>
    );
};

export default Menu;