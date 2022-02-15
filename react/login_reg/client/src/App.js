import React, { useState } from 'react';
import { Router } from "@reach/router";
import Dashboard from './components/dashboard';
import Main from './views/Main';
import LogReg from './views/logreg';



function App() {
  const [firstName, setFirstName] = useState("");

  return (
      <body>
        <Router>
          <LogReg path ="/" firstName = {firstName} setFirstName = {setFirstName}/>
          <Dashboard firstName = {firstName}  path="/dashboard" />
        </Router>
      </body>
    
  );
}
export default App;
