import axios from "axios";
import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';

function Checkout() {

  const [jsonData, setJsonData] = useState([]);
  const [userDetails, setUserDetails] = useState({
    userName: "",
    passWord: ""
  })


  async function getApiData() {

    try {
      const urlData = await axios.get("https://jsonplaceholder.typicode.com/users");

      const response = urlData;
      setJsonData(response.data);

    } catch (error) {
      console.log('error', error.message);
    }
  }

  async function createUser() {
    if (userDetails.userName === "" || userDetails.passWord === "") {
      console.log("please fill the both userName or PassWord!")
      alert("fill the both email or passWord!");
      return;
    }
    try {
      const urlData = await axios.post("https://jsonplaceholder.typicode.com/users", {
        email: userDetails.userName,
        passWord: userDetails.passWord
      })
    } catch (error) {
      console.log('error :', error);
    }
  }

   async function updateUser() {
    const urlData = await axios.put("https://jsonplaceholder.typicode.com/users/1");
     const response = urlData;

     setUserDetails(response.data);
  }

 
  function deleleUser() {

  }

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUserDetails({
      ...userDetails,
      [name]: value
    })
  }


  return (
    <>
      <div className="input-details" style={{ marginBottom: "150px", display: "flex", flexDirection: "column", alignItems: "start", marginLeft: "100px" }}>
        <TextField id="outlined-basic" label="email" name="userName" onChange={handleInput} variant="outlined" style={{ marginTop: "30px", marginBottom: "30px" }} />

        <TextField id="outlined-basic" name="passWord" onChange={handleInput} label="Password" variant="outlined" />

        <div className="container-fluid" style={{display: "flex",gap: "30px",marginTop: "30px"}}>


          <button onClick={getApiData}>get data</button>
          <button onClick={createUser}>create data</button>
          <button onClick={updateUser}>edit data</button>
          <button onClick={deleleUser}>delete data</button>
        </div>

      </div>
      {Array.isArray(jsonData) && jsonData.map(item => {
        return (
          <p>{item.name}</p>
        )
      })}
    </>
  );
}


export default Checkout;