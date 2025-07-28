import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './NavBar.css';
import '../Login/Login.css';
import { logout } from "../../Features/Auth/AuthSclice";
import LoginPopup from "../LoginPopup/LoginPopup";

function NavBar() {

  const [isLogin, setLogin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { isAuthenticate } = useSelector(state => state.auth)


  function navigateToPage(path) {
    navigate(path)
  }


  function handleLogout(event) {
    event.preventDefault();

    dispatch(logout())
  }

  function navigateToPopup() {
    setLogin(prev => !prev); 
  }

  console.log(isLogin,'clicked login')

  const middle = [
    { path: '/ekart', name: 'eKart' },
    { path: '/products', name: 'Products' },
    { path: '/orders', name: 'Orders' },
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
                <ul type='none' className={`navbar-list ${location.pathname === item.path ? 'active-link' : ''
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
            {isAuthenticate ? (<button onClick={handleLogout} type="submit" className="login-logout-button">Logout</button>) : (<button className="login-logout-button" onClick={navigateToPopup}>Login</button>)}
          </div>
        </div>
      </nav>

      <LoginPopup isLogin={isLogin} setLogin={setLogin}/>
    </>
  );
}

export default NavBar;

