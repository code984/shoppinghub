import React from 'react';
import '../css/Navbar.css';
import { BiShoppingBag} from "react-icons/bi"
import WelcomePage from './Welcome';

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
        <div className="logo">
          <div><BiShoppingBag className='logo' /></div>
          <div className="brand">Shopping Hub</div>
        </div>
        </nav>
    <div>
      <WelcomePage/>
    </div>
    </>
  );
};

export default Navbar;
