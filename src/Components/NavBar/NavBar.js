import React from "react";
import '../../Styles/NavBar/NavBar.css';

function NavBar() {

  return (
    <>
    <nav className="navbar-main">
      <div className="nav-bar">
        <div className="left-section">
          <ul type='none' className="home-list">
            <li>Home</li>
          </ul>
        </div>

        <div className="middle-section">
          <ul type='none' className="ul-lists">
            <li>Restarent List</li>
            <li>Cart</li>
            <li>Checkout</li>
          </ul>
        </div>

        <div className="right-section">
          <ul type='none'>
            <li>SignIn</li>
          </ul>
          <button>Login</button>
        </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;