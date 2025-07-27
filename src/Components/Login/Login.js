import React, { useEffect, useState } from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Features/Auth/AuthSclice";


function Login() {


  // const [userDetails, updateUserDetails] = useState({
  //   userName: '',
  //   password: ''
  // })


  // function handleUserName(event) {
  //   const userName = event.target.value;
  //   updateUserDetails(pre => ({
  //     ...pre,
  //     userName: `${userName}`
  //   }))
  // }

  // function handlePassword(event) {
  //   const password = event.target.value;
  //   updateUserDetails(pre => ({
  //     ...pre,
  //     password: `${password}`
  //   }))
  // }




  // function handleUserDetails(event) {
  //   console.log('user name:', userDetails.userName)
  //   console.log('password:', userDetails.password)

  //   if (userDetails.userName === 'sai' && userDetails.password === '12345') {
  //     setError('Login Succesfully');
  //     alert('Login succesfully')
  //     navigate('/')
  //   }  else {
  //     setError('sorry, ur password is incorrect. please double check ur password !')
  //   }
  // }



//   const [loginDetails, setLoginDetails] = useState({
//     userName: "",
//     passWord: ""
//   });

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { error, isAuthenticate } = useSelector(state => state.auth);



//   function handleLoginDetails(event) {
//     const name = event.target.name;
//     const value = event.target.value;
//     setLoginDetails({
//       ...loginDetails,
//       [name]: value
//     })
//   }

//   function handleSubmit(event) {
//       event.preventDefault();

//       dispatch(login({ userName: loginDetails.userName, passWord: loginDetails.passWord }))
//   }

//   useEffect(() => {
//     if (isAuthenticate) {
//       navigate('/home')
//     }
//   }, [isAuthenticate, navigate])

//   function goToSignUpPage() {
//     navigate('/signin')
//   }

//   return (
//     <>
//       <div className="login-page">
//         <div className="login-section">
//           <h3>Login Section</h3>
//           <div className="login-sub-section">
//             <input type="text" className="userNameBox" placeholder="Username" name="userName" onChange={handleLoginDetails} />
//             <input type="text" className="passwordBox" placeholder="Password" name="passWord" onChange={handleLoginDetails} />
//             <button className="login-button-new" onClick={handleSubmit}>Login</button>
//             <span className="error-message">{error}</span>
//             <div className="or-container">
//               <div className="hr-container">
//                 <div className="hr-line">
//                   <hr />
//                 </div>
//                 <div className="or-text">
//                   OR
//                 </div>
//                 <div className="hr-line">
//                   <hr />
//                 </div>
//               </div>
//               <div className="email-login">
//                 <span>Login with Email</span>
//               </div>
//               <div className="forgotten-password">
//                 <span>Forgotten password ?</span>
//               </div>
//             </div>
//           </div>
//           <div className="dont-have-acvount">
//             Don't have an account ?
//             <span onClick={goToSignUpPage}>Sign up</span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
}


export default Login;


