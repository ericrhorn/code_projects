import React from "react";
import Login from "../components/login";
import RegisterUser from "../components/register"


const LogReg = (props) => {

    const {firstName, setFirstName} = props;

    return (
        <div>
            <Login firstName = {firstName} setFirstName = {setFirstName}/>
            <hr/>
            <RegisterUser/>
        </div>
    );
};

export default LogReg;