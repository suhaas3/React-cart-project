import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Features/Auth/AuthSclice";

function Ekart() {

  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();


  function handleLogout() {
    dispatch(logout())
  }

  return (

    <>
      <div className="profile-details">
        <h1>wellcome! {user?.userName}</h1>
        <p>you have successfully logged in...</p>
        <button onClick={handleLogout}>logout</button>
      </div>
    </>
  );
}



export default Ekart;