/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import ParticleBackground from './ParticleBackground';
import "../style.css";

import Media from "react-media"
import python from "../python.jpeg"
import java from "../java.jpeg"
import react from "../logo.svg"


const Home =()=>{

    return (
        <div class="container">

            <div class="row align-items-start">

                <div class="particles col ">
                    <div>
                        <Media query="(min-width: 1000px)">
                            {
                                matches => {
                                    return matches ? 
                                    <div>
                                        <div>
                                            <ParticleBackground/>
                                            <div class="row align-items-center">
                                            <div class="col">
                                                <CenterTile/>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    : 
                                    <div class="col"
                                    style={{
                                        paddingTop: 150
                                    }}
                                    >
                                        <CenterTile/>
                                    </div>
                                }
                            }
                        </Media>
                    </div>
                </div>
            </div>

            <div class="homeImages row align-items-end">

                <div class="col">
                    <img
                        style={{
                            width:200,
                            height:125,
                            
                        }}
                        src={python}
                    />
                    <img
                        class="App-logo" alt="logo"
                        style={{
                            width:200,
                            height:125,
                            
                        }}
                        src={react}
                    />
                    <img
                        style={{
                            width:200,
                            height:125,
                        }}
                        src={java}
                    />
                </div>
                    
            </div> 

        </div>
    )
}

function CenterTile() {
    return (
    <div>
        <div className="text_div">
          <h1>ERIC HORN</h1>
          <h2>Full Stack Web Developer</h2>
        </div>
      </div>
    )
  }

export default Home;