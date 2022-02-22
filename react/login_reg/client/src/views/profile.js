import { navigate } from "@reach/router";
import React, { useState, useEffect } from 'react'
import axios from "axios";



const Profile = (props) => {

    //destructure from props
    const { user, setUser } = props;
    // const [user, setUser] = useState({})

    // useEffect = e => {
    //     axios.get('http://localhost:8000/api/user/profile',{
    //         withCredentials: true
    //     })
    //     .then((res)=>{
    //         console.log(res.data)
    //         setUser(res.data)
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // }

// useEffect(() => {
//     const loggedInUser = localStorage.getItem("userLoggedIn");
//     if (loggedInUser) {
//         const foundUser = JSON.parse(loggedInUser);
//         setUser(foundUser);
//     }
//     }, []);

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
      
        <h1>profile</h1>
        <h4>hello {props.user.firstName} {props.user.lastName}</h4>
        <p>{props.user.email}</p>
        <p>{props.user.id}</p>
      <div>
        <button onClick={(e) => logout(e)}>Logout</button>
      </div>
      
    </div>
    
  );
};
export default Profile;