import React from "react";
import Logo from "../../Assets/Logo/Logo.png";
import "./Header.scss";


function Header() {
  return (
    <div className='Header'>
      <img src={Logo} alt='Logo' /> 
      <div className='HeaderLogoText'>
        Blooming Sakura
      </div>    
    </div>
  );
}

export default Header;
