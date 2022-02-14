import React, { useState } from 'react'
import Login from './login';
import axios from 'axios';
const PersonForm = () => {
    //keep track of what is being typed via useState hook
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/user', {
            firstName,    // this is shortcut syntax for firstName: firstName,
            lastName,      // this is shortcut syntax for lastName: lastName
            email,
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

//     ...
// register: (req, res) => {
//   User.create(req.body)
//     .then(user => {
//         const userToken = jwt.sign({
//             id: user._id
//         }, process.env.SECRET_KEY);
 
//         res
//             .cookie("usertoken", userToken, secret, {
//                 httpOnly: true
//             })
//             .json({ msg: "success!", user: user });
//     })
//     .catch(err => res.json(err));
// }
// ...


    //onChange to update firstName and lastName
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>First Name</label><br/>
                    <input type="text" onChange = {(e)=>setFirstName(e.target.value)}/>
                </p>
                <p>
                    <label>Last Name</label><br/>
                    <input type="text" onChange = {(e)=>setLastName(e.target.value)}/>
                </p>
                <p>
                    <label>Email</label><br/>
                    <input type="email" onChange = {(e)=>setEmail(e.target.value)}/>
                </p>
                <input type="submit"/>
            </form>
            < Login path = "/login"/>
        </div>
    )
}
export default PersonForm;
