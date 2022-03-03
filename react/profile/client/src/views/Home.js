// import Main from "./views/main";
import ParticleBackground from '../views/ParticleBackground';
import "../style.css";


const Home =()=>{
    return (
        <div id="container">
            <span>
            <div id="particles">
                <ParticleBackground/>
                <CenterTile/>
            </div>
            {/* <div id="title">
                <CenterTile/>
            </div> */}
            </span>
        </div>
    )
}

function CenterTile() {
    return (
      <div id = "text_div center_all">
        <div className="center_all">
          <h1>ERIC HORN</h1>
          <h2>Full Stack Web Developer</h2>
        </div>
      </div>
    )
  }

export default Home;