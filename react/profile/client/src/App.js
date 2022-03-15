import 'bootstrap/dist/css/bootstrap.min.css';

import NavBarComp from "./views/NavBarComp";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Projects from "./views/Projects"
import Tech from "./views/Tech";


// import Image1 from "./views/Images/Image1";
// import Image2 from "./views/Images/Image2";
// import Image3 from "./views/Images/Image3";
import "./style.css";



function App() {
  return (
    <>
      <div className="main" id="home">
        <NavBarComp/>

        <section className="home">
            <Home path="/"/>
          </section>

          <section className="about" id="about">
            <About path="/about"/>
          </section>

          <section className="tech" id="tech">
            <Tech path="/tech"/>
          </section>

          <section className="projects" id="projects">
            <Projects path="/projects"/>
          </section>
          
          <section className="contact" id="contact">
            <Contact path="/contact"/>
          </section>

      </div>
    </>
    
  );
}

export default App;