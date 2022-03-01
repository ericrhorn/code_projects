// import logo from './logo.svg';
// import './App.css';
// import ParticlesPage from './components/particles-config';
// import Main from "./views/main";
// import ParticleBackground from './views/ParticleBackground';
// import "./style.css";
import NavBarComp from "./views/NavBarComp";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./views/Home";
import { Router } from "@reach/router";
import About from "./views/About";
import Contact from "./views/Contact";

function App() {
  return (
    <div>
      <div>
        <NavBarComp/>
      </div>
        <body>
        <Router>
          <Home path="/"/>
          <About path="/about"/>
          <Contact path="/contact"/>
        </Router>
        </body>
      
      
        
        {/* <div class="first">
          <div id="particles">
            <ParticleBackground/>
          </div>
          <CenterTile/>
        </div> */}
        {/* <div>
        <Main/>
        </div> */}
     
      
      
    </div>
    
  );
}



export default App;
