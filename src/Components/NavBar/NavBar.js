import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../../Styles/NavBar/NavBar.css';
import '../../Styles/LoginButton/LoginButton.css';

function NavBar() {

  const navigate = useNavigate();

  const location = useLocation();

  const navigateToPage = (event) => {
    const { value } = event.target;
    navigate(value);
  }

  const middle = [
    { path: '/', name: 'Home' },
    { path: '/restarents', name: 'Restarent List' },
    { path: '/cart', name: 'Cart' },
    { path: '/checkout', name: 'Checkout' }
  ];
  return (
    <>
      <nav className="navbar-main">
        <div className="nav-bar">
          <div className="middle-section">
            <ul type='none' className="mid-lists">
              {middle.map((item, index) => {
                return (
                  <Link to={item.path} className={`navbar-list ${
                    location.pathname === item.path ? 'active-link' : ''
                  }`}  key={index}><li>{item.name}</li></Link>
                );
              })}
            </ul>
          </div>

          <div className="search-bar">
            <input type="text" placeholder="Type Ur Need" className="search-input-box" />
          </div>

          <div className="right-section">
            <button className="login-button" value={'/signin'} onClick={navigateToPage}>SignUp</button>
            <button className="login-button" value={'/login'} onClick={navigateToPage}>Login</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

