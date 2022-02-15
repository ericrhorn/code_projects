import React, { useState } from 'react'
import axios from "axios";
import {navigate} from "@reach/router";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const login = event => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/user/login', {
            email: email,
            password: password,
        },
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
            navigate("/dashboard")
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
                        value = {email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </p>
                <p>
                <label>Password</label><br/>
                    <input
                        type = "text"
                        name = "password"
                        value = {password}
                        onChange={(e) => setPassword(e.target.value)}
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


export default Login;