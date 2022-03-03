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
import Footer from "./views/Footer";

function App() {
  return (
    <div className="main" id="home">
      {/* <div className="navBar"> */}
        <NavBarComp/>
      {/* </div> */}
      {/* <Router> */}
      
        <section className="home">
          <Home path="/"/>
        </section>
        <section className="about body" id="about">
          <About path="/about"/>
        </section>
        <section className="contact body" id="contact">
          <Contact path="/contact"/>
        </section>
        <section className="footer body" id="footer">
          <Footer path="/footer"/>
        </section>
        {/* </Router> */}
      
      
        
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
