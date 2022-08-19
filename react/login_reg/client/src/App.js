import React, { useState } from 'react';
import { Router } from "@reach/router";
import Dashboard from './components/dashboard';
import Profile from './views/profile';
// import Main from './views/Main';
import LogReg from './views/logreg';



function App() {
  // const [firstName, setFirstName] = useState("");
  // const [user, setUser] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   id: "",
  // });

  const [isLoggedin, setIsLoggedin] = useState(false)


  return (
      <body>
        <Router>
          <LogReg path ="/" isLoggedin = {isLoggedin} setIsLoggedin = {setIsLoggedin}/>
          {/* <Dashboard firstName = {firstName}  path="/dashboard" /> */}
          <Profile path="/profile" isLoggedin = {isLoggedin} setIsLoggedin = {setIsLoggedin} />
        </Router>
      </body>
    
  );
}
export default App;
