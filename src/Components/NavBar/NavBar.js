import React from "react";
import { Link } from "react-router-dom";
import '../../Styles/NavBar/NavBar.css';
import '../../Styles/LoginButton/LoginButton.css';

function NavBar() {

  const middle = [
    { path: '/restarents', name: 'Restarent List' },
    { path: '/cart', name: 'Cart' },
    { path: '/checkout', name: 'Checkout' }
  ];
  return (
    <>
      <nav className="navbar-main">
        <div className="nav-bar">
          <div className="left-section">
            <ul type='none' className="home-list">
              <Link to='/' className="navbar-list"><li>Home</li></Link>
            </ul>
          </div>

          <div className="middle-section">
            <ul type='none' className="mid-lists">
              {middle.map((item, index) => {
                return (
                  <Link to={item.path} className="navbar-list" key={index}><li>{item.name}</li></Link>
                );
              })}
            </ul>
          </div>

          <div className="search-bar">
              <input type="text" placeholder="Type Ur Need" className="search-input-box"/>
          </div>

          <div className="right-section">
            <ul type='none'>
            <Link to='/signin' className="navbar-list"><li>SignIn</li></Link>
          </ul>
          <Link to='/login'><button className="login-button">Login</button></Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

