import React from "react";
import Particles from "react-particles-js";
import "../style.css";


const ParticlesPage = () => {

    return (
        <div
            style={{
            background: "black",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
            }}>
            <Particles
            params={{
                fps_limit: 30,
                particles: {
                collisions: {
                    enable: false
                },
                number: {
                    value: 200,
                    density: {
                    enable: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 30,
                    opacity: 0.4
                },
                move: {
                    speed: 1
                },
                opacity: {
                    anim: {
                    enable: true,
                    opacity_min: 0.05,
                    speed: 1,
                    sync: false
                    },
                    value: 0.4
                }
                },
                polygon: {
                enable: true,
                scale: 0.5,
                type: "inline",
                move: {
                    radius: 10
                },
                url: "/smalldeer.svg",
                inline: {
                    arrangement: "equidistant"
                },
                draw: {
                    enable: true,
                    stroke: {
                    color: "rgba(255, 255, 255, .2)"
                    }
                }
                },
                retina_detect: false,
                interactivity: {
                events: {
                    onhover: {
                    enable: true,
                    mode: "bubble"
                    }
                },
                modes: {
                    bubble: {
                    size: 6,
                    distance: 40
                    }
                }
                }
            }}/>
        <div class = "name">
            <h1>ERIC HORN</h1>
            <h2>Full Stack Web Developer</h2>
        </div>
      </div>
    );
}


export default ParticlesPage;

