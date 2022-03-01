import React from "react";
import Particles from "react-particles-js";
// import ParticlesPage from "../components/particles-config";

export default function ParticleBackground() {
    return (
        <>
        <Particles 
        params={{
            fps_limit: 35,
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
            color:{
                value: "#000003"
            },
            line_linked: {
                enable: true,
                distance: 30,
                opacity: 0.4,
                width: 1,
                color: "#000000",
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
                color: "#FF0000"
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
        }}>
        </Particles>
        <h1>ERIC HORN</h1>
        <h2>Full Stack Web Developer</h2>
        </>
        
        
    );
}