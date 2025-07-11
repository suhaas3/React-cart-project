import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './NavBar.css';
import '../LoginButton/LoginButton.css';

function NavBar() {

  const navigate = useNavigate();

  const location = useLocation();

  function navigateToPage(path) {
    navigate(path)
  }

  const middle = [
    { path: '/', name: 'eKart' },
    { path: '/restarents', name: 'Restarent List' },
    { path: '/cart', name: 'Cart' },
    { path: '/checkout', name: 'Checkout' }
  ];
  return (
    <>
      <nav className="navbar-main">
        <div className="nav-bar">
          <div className="middle-section">
              {middle.map((item, index) => {
                return (
                  <ul type='none' className={`navbar-list ${
                    location.pathname === item.path ? 'active-link' : ''
                  }`}>
                    <li onClick={() => navigateToPage(item.path)} className="lists">{item.name}</li>
                  </ul>
                );
              })}
          </div>

          <div className="search-bar">
            <input type="text" placeholder="Type Ur Need" className="search-input-box" />
          </div>

          <div className="right-section">
            <button className="login-button" onClick={() => navigateToPage('/login')}>Login</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

