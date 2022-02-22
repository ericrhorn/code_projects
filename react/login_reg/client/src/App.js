import React, { useState } from 'react';
import { Router } from "@reach/router";
import Dashboard from './components/dashboard';
import Profile from './views/profile';
// import Main from './views/Main';
import LogReg from './views/logreg';



function App() {
  // const [firstName, setFirstName] = useState("");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    id: "",
  });

  return (
      <body>
        <Router>
          <LogReg path ="/" user = {user} setUser = {setUser}/>
          {/* <Dashboard firstName = {firstName}  path="/dashboard" /> */}
          <Profile path="/profile" user = {user} setUser = {setUser} />
        </Router>
      </body>
    
  );
}
export default App;
