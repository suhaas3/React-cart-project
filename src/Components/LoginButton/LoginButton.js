import React from "react";

function LoginButton() {

  return (
    <>
      <div className="login-section">
        <div className="login-sub-section"> 
          <h3>Login</h3>
          <input type="text" className="userNameBox" placeholder="Username" />
          <input type="text" className="passwordBox" placeholder="Password" />
        </div>
      </div>
    </>
  );
}


export default LoginButton;