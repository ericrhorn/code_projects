import React from "react";
import Login2 from "../components/login2";
import RegisterUser from "../components/register"


const LogReg = (props) => {

    // const {user, setUser} = props;
    const { isLoggedin, setIsLoggedin } = props;



    return (
        <div>
            <Login2 isLoggedin = {isLoggedin} setIsLoggedin = {setIsLoggedin}/>
            <hr/>
            <RegisterUser isLoggedin = {isLoggedin} setIsLoggedin = {setIsLoggedin}/>
        </div>
    );
};

export default LogReg;