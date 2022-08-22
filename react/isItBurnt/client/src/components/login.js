import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const LoginUser = (props) => {

    const navigate = useNavigate();
    const {isLoggedin, setIsLoggedin} = props;
    const [errorMessage, setErrorMessage] = useState('');

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
            setIsLoggedin(true);
            navigate('/')
        })
        .catch(err => {
            console.log(err.response);
            setErrorMessage(err.response.data.message);
        })
    }

    return (
        <div class="container mt-5 rounded-3 shadow p-3 bg-body" style={{width: 500, backgroundColor: 'white'}}>
            <h2>User Login</h2>
            <form onSubmit={login}>
                
                <div class="mb-3 mt-3">
                    <label>Email</label><br/>
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