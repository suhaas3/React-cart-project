import React, { useState } from "react";
import '../../Styles/LoginButton/LoginButton.css';
import { useNavigate } from "react-router-dom";


function LoginButton() {

  const navigate = useNavigate();

  const [userDetails, updateUserDetails] = useState({
    userName: '',
    password: ''
  })

  function handleUserName(event) {
    const userName = event.target.value;
    updateUserDetails(pre => ({
      ...pre,
      userName: `${userName}`
    }))
  }

  function handlePassword(event) {
    const password = event.target.value;
    updateUserDetails(pre => ({
      ...pre,
      password: `${password}`
    }))
  }

  function handleUserDetails(event) {
    console.log('user name:', userDetails.userName)
    console.log('password:', userDetails.password)
    if (userDetails.userName === 'sai' && userDetails.password === '12345') {
      navigate('/')
    } else if (userDetails.userName === '' && userDetails.password === '') {
      console.log('sorry! user name and password empty')
    }
  }

  function goToSignUpPage() {
    navigate('/signin')
  }

  return (
    <>
      <div className="login-section">
        <h1>{userDetails.userName}</h1>
        <h1>{userDetails.password}</h1>
        <div className="login-sub-section">
          <h3>Login Section</h3>
          <input type="text" className="userNameBox" placeholder="Username" onChange={handleUserName} />
          <input type="text" className="passwordBox" placeholder="Password" onChange={handlePassword} />
          <button className="login-button-new" onClick={handleUserDetails}>Login</button>
          <div className="or-container">
            <div className="hr-container">
              <div className="hr-line">
                <hr />
              </div>
              <div className="or-text">
                OR
              </div>
              <div className="hr-line">
                <hr />
              </div>
            </div>
            <div className="email-login">
              <span>Login with Email</span>
            </div>
            <div className="forgotten-password">
              <span>Forgotten password ?</span>
            </div>
          </div>
        </div>
        <div className="dont-have-acvount">
          Don't have an account ?
          <span onClick={goToSignUpPage}>Sign up</span>
        </div>
      </div>
    </>
  );
}


export default LoginButton;

