  import React, { useEffect, useState } from "react";
  import './Login.css';
  import { useNavigate } from "react-router-dom";
  import { useDispatch, useSelector } from "react-redux";
  import { login } from "../../Features/Auth/AuthSclice";
  import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
  
  
  function Login({isLogin,setLogin}) {
  const [loginDetails, setLoginDetails] = useState({
    userName: "",
    passWord: ""
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const { error, isAuthenticate } = useSelector(state => state.auth);



  function handleLoginDetails(event) {
    const name = event.target.name;
    const value = event.target.value;
    setLoginDetails({
      ...loginDetails,
      [name]: value
    })
  }

  function handleSubmit(event) {
      event.preventDefault();
      dispatch(login({ userName: loginDetails.userName, passWord: loginDetails.passWord }));
      setLogin(false);
      navigate('/ekart');
  }

  // useEffect(() => {
  //   if (isAuthenticate) {
  //     navigate('/home')
  //   }
  // }, [isAuthenticate, navigate])

  // function goToSignUpPage() {
  //   navigate('/signin')
  // }

  return (
    <>
      <div className="login-page">
        <div className="login-section">
          <div className="login-sub-section">
                  <TextField id="outlined-basic" className="userNameBox" label="UserName"  name="userName" onChange={handleLoginDetails} variant="outlined" />
            {/* <input type="text" className="userNameBox" placeholder="Username" name="userName" onChange={handleLoginDetails} /> */}
            {/* <input type="text" className="passwordBox" placeholder="Password" name="passWord" onChange={handleLoginDetails} /> */}
            <TextField id="outlined-basic" className="passwordBox"  label="Password"  name="Password" onChange={handleLoginDetails} variant="outlined" />
            <Button onClick={handleSubmit} className="login-button-new" variant="contained">Login</Button>
            {/* <button className="login-button-new" onClick={handleSubmit}>Login</button> */}

          </div>
        </div>
      </div>
    </>
  );

}

export default Login;