import React from "react";
import './Ekart.css';
import { useSelector } from "react-redux";

function Ekart() {

  const { user } = useSelector(state => state.auth);


  return (

    <>
      <div className="ekart-main">
        <div className="profile-details">
          <div className="greetings">
            <h1 className="welcome">wellcome! {user?.userName}</h1>
            <p className="logged-in">you have successfully logged in...</p>
          </div>
        </div>
      </div>
    </>
  );
}



export default Ekart;