import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const LoginUser = (props) => {

    const navigate = useNavigate();
    const {isLoggedin, setIsLoggedin} = props;
    const [err, setErr] = useState({});

    const [user, setUser] = useState({
        email : '',
        password : '',
    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value,
        });
    }

    const login = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/user/login', user, {withCredentials: true})
        .then((res) => {
            console.log(res.data)
            setIsLoggedin(true);
            setErr({})
            navigate('/')
        })
        .catch((err) => {
            console.log(err);
            setErr(err.response.data.errors)
        })
    }

    return (
        <div class="container mt-5 rounded-3 shadow p-3 bg-body" style={{width: 500, backgroundColor: 'white'}}>
            <h2>User Login</h2>
            <form onSubmit={login}>
                
                <div class="mb-3 mt-3">
                    <label>Email</label><br/>
                    {
                    err.email ? (
                        <span className='error-text'>{err.email.message}</span>
                    )
                    : null
                    }
                    <input
                        className='form-control'
                        type = "text"
                        name = "email"
                        value = {user.email}
                        onChange = {handleChange}
                    />
                </div>
                <div class="mb-3">
                    <label>Password</label><br/>
                    {/* {
                    err.password ?
                    <span className='error-text'>{err.password.message}</span>
                    : null
                    } */}
                    <input
                        className='form-control'
                        type = "password"
                        name = "password"
                        value = {user.password}
                        onChange = {handleChange}
                    />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default LoginUser;