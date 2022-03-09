// import logo from './logo.svg';
// import './App.css';
// import ParticlesPage from './components/particles-config';
// import Main from "./views/main";
// import ParticleBackground from './views/ParticleBackground';
// import "./style.css";
import { Router } from "@reach/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from "./views/NavBarComp";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Projects from "./views/Projects"
import Tech from "./views/Tech";

import Footer from "./views/Footer";
import Image1 from "./views/Images/Image1";
import Image2 from "./views/Images/Image2";
import Image3 from "./views/Images/Image3";
import "./style.css";



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
        {/* <section className="filler_img">
          <Image1/>
        </section> */}
        <section className="about" id="about">
          <About path="/about"/>
        </section>

        <section className="tech" id="tech">
          <Tech path="/tech"/>
        </section>

        <section className="projects" id="projects">
          <Projects path="/projects"/>
        </section>
        
        {/* <section className="filler_img">
          <Image2 path="/image2"/>
        </section> */}
        <section className="contact" id="contact">
          <Contact path="/contact"/>
        </section>
        {/* <section className="filler_img">
          <Image3 path="/image3"/>
        </section>
        <section className="footer body" id="footer">
          <Footer path="/footer"/>
        </section> */}
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
