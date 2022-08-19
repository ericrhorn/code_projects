import React, { useState, useEffect } from 'react'
import axios from "axios";
import {navigate} from "@reach/router";


const Login2 = (props) => {
    // const {user, setUser} = props;
    const { isLoggedin, setIsLoggedin } = props;
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const [user, setUser] = useState({
        email : "", 
        password : "",
    })

        //using a single function to update the state object
    // we can use the inputs name attribute as the key in to the object
    const handleChange = (e) => {
        setUser({   // set state
            ...user,    // spread the old state
            [e.target.name]: e.target.value, // object as a state (put name in input field) : and where the value is located
        })
}

    const login = event => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/user/login', 
        user,
        {
        // this will force the sending of the credentials / cookies so they can be updated
        // XMLHTTPRequest from a different domain canno set cookie values for their own domain
        // unless withCredentials is set to true before making the request
        withCredentials: true,
        })
        .then((res) => {
            console.log(res.cookies);
            console.log(res);
            console.log(res.data, 'is res data');
            setIsLoggedin(true);
            // setUser({
            //     email: res.data.userLoggedIn,
            //     firstName: res.data.userFirstName,
            //     lastName: res.data.userLastName,
            //     id: res.data.userId,
            // })
            //store the user in local storage
            // localStorage.setItem("userLoggedIn", JSON.stringify(res.data));
            navigate("/profile")

        })
        .catch(err => {
            console.log(err.response);
            setErrorMessage(err.response.data.message);
        });
    };

    return (
        <div>
            <h2>Login</h2>
            <p className="error-text">{errorMessage ? errorMessage : ""}</p>
            <form onSubmit={login}>
                <p>
                <label>Email</label><br/>
                    <input
                        type = "text"
                        name = "email"
                        value = {user.email}
                        onChange = {(e)=> handleChange(e)}
                        // onChange={login}
                    />
                </p>
                <p>
                <label>Password</label><br/>
                    <input
                        type = "password"
                        name = "password"
                        value = {user.password}
                        onChange = {(e)=> handleChange(e)}
                        // onChange={login}
                    />
                </p>
                <div>
                <button
                    type="submit"
                    >Login</button>
            </div>
            </form>
            
        </div>
    )
}


export default Login2;