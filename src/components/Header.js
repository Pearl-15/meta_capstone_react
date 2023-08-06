import React from "react";


function Header(){
    return(
        <div className="main-grid">
          <img src="/Logo.svg"  alt="logo" />
        <ul className="menu-list">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>MENU</li>
            <li>RESERVATIONS</li>
            <li>LOGIN</li>
        </ul>
        </div>
    )
}

export default Header;