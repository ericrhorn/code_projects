import React, { useState } from 'react'
import axios from 'axios';
import {navigate} from "@reach/router";


const RegisterUser = () => {
    //keep track of what is being typed via useState hook
    // const [firstName, setFirstName] = useState(""); 
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");

    const [confirmReg, setConfirmReg] = useState("");
    const [errs, setErrs] = useState({});   


    // using a single state object to hold all the data
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })


    //using a single function to update the state object
    // we can use the inputs name attribute as the key in to the object
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
}

const register = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/user/register',
    user,                   // the user state is already an object with the correct keys and values
    {
        // this will force the sending of the credentials / cookies so they can be updated
        // XMLHTTPRequest from a different domain canno set cookie values for their own domain
        // unless withCredentials is set to true before making the request
        withCredentials: true, 
    })
    .then(res => {
        console.log(res.data);
        // when we successfully create the account, reset state for registration form

        setUser({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        })
        setConfirmReg("Thank you for registering");
        setErrs({})     // remember to reset error state if it was successfull
        navigate("/dashboard")
    })
    .catch((err) => {
        console.log(err);
        setErrs(err.response.data.errors)
    });
};


    //onChange to update firstName and lastName
    return (
        <div>
            <h2>Register</h2>
            {
                confirmReg ?
                    <h4 style={{color: "green"}}>{confirmReg}</h4>
                    : null
            }
            <form onSubmit={register}>
                <div>
                    <label>First Name</label><br/>
                    {
                    errs.firstName ?
                    <span className='error-text'>{errs.firstName.message}</span>
                    : null
                    }
                    <input 
                        type="text" 
                        name="firstName"
                        value={user.firstName}
                        onChange = {(e)=> handleChange(e)}
                    />
                </div>
                <p>
                    <label>Last Name</label><br/>
                    {
                    errs.lastName ?
                    <span className='error-text'>{errs.lastName.message}</span>
                    : null
                    }
                    <input 
                        type="text" 
                        name="lastName"
                        value={user.lastName}
                        onChange = {(e)=> handleChange(e)}
                    />
                </p>
                <p>
                    <label>Email</label><br/>
                    {
                    errs.email ?
                    <span className='error-text'>{errs.email.message}</span>
                    : null
                    }
                    <input 
                        type="email" 
                        name="email"
                        value={user.email}
                        onChange = {(e)=> handleChange(e)}
                    />
                </p>
                <p>
                    <label>Password</label><br/>
                    {
                    errs.password ?
                    <span className='error-text'>{errs.password.message}</span>
                    : null
                    }
                    <input 
                        type="password" 
                        name="password"
                        value={user.password}
                        onChange = {(e)=> handleChange(e)}
                    />
                </p>
                <p>
                    <label>Password Confirmation</label><br/>
                    {
                    errs.confirmPassword ?
                    <span className='error-text'>{errs.confirmPassword.message}</span>
                    : null
                    }
                    <input 
                        type="password" 
                        name="confirmPassword"
                        value={user.confirmPassword}
                        onChange = {(e)=> handleChange(e)}
                    />
                </p>
                <div>
                    <button
                        type="submit"
                    >Register</button>
                </div>
            </form>
        </div>
    )
}
export default RegisterUser;



    //handler when the form is submitted
    // const onSubmitHandler = e => {
    //     //prevent default behavior of the submit
    //     e.preventDefault();
    //     //make a post request to create a new person
    //     axios.post('http://localhost:8000/api/user', {
    //         firstName,    // this is shortcut syntax for firstName: firstName,
    //         lastName,      // this is shortcut syntax for lastName: lastName
    //         email,
    //     })
    //         .then(res=>console.log(res))
    //         .catch(err=>console.log(err))
    // }