import React from "react";
import Login2 from "../components/login2";
import RegisterUser from "../components/register"


const LogReg = (props) => {

    const {user, setUser} = props;

    return (
        <div>
            <Login2 user = {user} setUser = {setUser}/>
            <hr/>
            <RegisterUser/>
        </div>
    );
};

export default LogReg;