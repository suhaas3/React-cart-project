import React from "react";
import { useSelector } from "react-redux";

function Home() {

  const globalData = useSelector((globalStore) => globalStore);

  console.log(globalData.SignUpForm.userName,'global dataaaaaaaa')

  return (

    <>
      <h1>{globalData.SignUpForm.userName}</h1>
    </>
  );
}



export default Home;