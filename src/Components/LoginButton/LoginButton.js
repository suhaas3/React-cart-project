import React, { useState } from "react";
import './LoginButton.css';
import { useNavigate } from "react-router-dom";


function LoginButton() {

  const navigate = useNavigate();

  const [userDetails, updateUserDetails] = useState({
    userName: '',
    password: ''
  })

  const [error,setError]=useState();


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
      setError('Login Succesfully');
      alert('Login succesfully')
      navigate('/')
    }  else {
      setError('sorry, ur password is incorrect. please double check ur password !')
    }
  }

  function goToSignUpPage() {
    navigate('/signin')
  }

  return (
    <>
      <div className="login-section">
        <div className="login-sub-section">
          <h3>Login Section</h3>
          <input type="text" className="userNameBox" placeholder="Username" onChange={handleUserName} />
          <input type="text" className="passwordBox" placeholder="Password" onChange={handlePassword} />
          <button className="login-button-new" onClick={handleUserDetails}>Login</button>
          <span className="error-message">{error}</span>
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

