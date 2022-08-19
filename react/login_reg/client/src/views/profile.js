import { navigate } from "@reach/router";
import React, { useState, useEffect } from 'react'
import axios from "axios";



const Profile = (props) => {

    //destructure from props
    const { isLoggedin, setIsLoggedin } = props;
    const [user, setUser] = useState(null)


  useEffect(() => {
    axios.get('http://localhost:8000/api/user/current-user', {withCredentials: true})
    .then((res)=>{
        console.log(res.data);
        setUser(res.data);
    })
    .catch((err)=>{
        console.log(err)
    })
  },[]);

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

const logout = (e) => {
    axios.post('http://localhost:8000/api/user/logout', {}, {withCredentials: true, })
    .then((res) => {
      // setUser(null)
      // res.removeItem('userToken')
      // res.sendStatus(200);
      console.log("successfully logged out")  
      navigate("/")
    })
    .catch(err => {
      console.log(err);
    })
  }


  return (
    <div>
      {user ? (
        <div>
              <h1>profile</h1>
            <h4>hello {user.firstName} {user.lastName} </h4>
      
          <div>
            <button onClick={logout}>Logout</button>
          </div>

        </div>
       

      ) : (
        <div>
            <h1>You are not authorised to view this page</h1>
        </div>
        )}
      
        
      
    </div>
    
  );
};
export default Profile;