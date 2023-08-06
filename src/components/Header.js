import React from "react";
import { Link } from "react-router-dom";


function Header(){
    return(
        <div className="main-grid">
          <img src="/Logo.svg"  alt="logo" />
        <ul className="menu-list">
        <li>
          <Link to="/" className="menu-link">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/about" className="menu-link">
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/menu" className="menu-link">
            MENU
          </Link>
        </li>
        <li>
          <Link to="/reservations" className="menu-link">
            RESERVATIONS
          </Link>
        </li>
        <li>
          <Link to="/login" className="menu-link">
            LOGIN
          </Link>
        </li>
      </ul>
        </div>
    )
}

export default Header;