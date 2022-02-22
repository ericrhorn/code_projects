import { navigate } from "@reach/router";
import React, { useState, useEffect } from 'react'

import axios from "axios";



 

const Dashboard = (props) => {


  // const {firstName, setFirstName} = props;
  // const [user, setUser] = useState();


   //checks to see if there is a logged in user each time the app loads
//    useEffect (() => {
//     const user = localStorage.getItem("userLoggedIn");
//     if (user) {
//         const foundUser = JSON.parse(user);
//         setUser(foundUser);
//     } else {
//       console.log("didnt work")
//     }
// },[]);

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

  // if there's a user show the message below
  // if (user) {
  //   return (
  //     <div>
  //       <p>Please log in to view this page</p>
  //       <button>login</button>
  //     </div>
  //   );
  // }


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