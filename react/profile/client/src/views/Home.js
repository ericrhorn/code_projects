// import Main from "./views/main";
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import ParticleBackground from './ParticleBackground';
import "../style.css";
// import {useMediaQuery} from "react-responsive"
import Media from "react-media"
import bkgrImg from "../whiteStag.jpeg"


const Home =()=>{

    // const display = useMe

     
    return (
        <div id="container">
            <div id="particles">
                <div>
                    <Media query="(min-width: 1000px)">
                        {
                            matches => {
                                return matches ? 
                                <div>
                                    <div>
                                        <ParticleBackground/>
                                    </div>
                                    <div>
                                        <CenterTile/>
                                    </div>
                                </div>
                                : null
                                // <div style={{
                                //     backgroundImage: `url(${bkgrImg})`,
                                //     backgroundPosition: 'center',
                                //     backgroundSize: 'cover',
                                //     backgroundRepeat: 'no-repeat'
                                //     }}>
                                //     <div style={{color: "red"}}>
                                //     <CenterTile/>
                                //     </div>
                                // </div> 
                            }
                        }
                    </Media>
                </div>
                <div>
                    <CenterTile/>
                </div>
            </div>
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