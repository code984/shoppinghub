import React from 'react'
import '../css/Welcome.css';
import { Link } from 'react-router-dom';
const WelcomePage = () => {
  return (
    <>
    
    <div className="welcome-page">

      <p>Welcome to Food's <br/> Kitchen</p>
      
   <Link to="/Shopping">   <button>GO TO MENU</button></Link>
    </div>
    </>
  );
};

export default WelcomePage;