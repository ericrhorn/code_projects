import { navigate } from "@reach/router";
import axios from "axios";
import React from "react";


const Dashboard = (props) => {

  const logout = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/user/logout', {
 
    }, {
      withCredentials: true, 
    })
    .then((res) => {
        console.log(res.data);
        navigate("/")
    })
    .catch(err => {
      console.log(err);
    })
  }


  return (
    <div>
      <div>
        <h1>Welcome??!! { props.firstName } </h1>
      </div>
      <div>
        <button onClick={(e) => logout(e)}>Logout</button>
        <p>Where is my button?</p>
      </div>
      
      
    </div>
    
  );
};
export default Dashboard;