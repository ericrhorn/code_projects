/* eslint-disable jsx-a11y/alt-text */

import "../style.css";
import famImg from "../family.JPG"



const About =()=>{
    return (
        <div class="container-fluid bio">
            <div class="row">
                <div class="col col-offset-1 aboutInfo">
                    <h1>About Eric</h1>
                    <h4>Criminal Justice Major Turned Coder</h4>
                    <p class="infotext" 
                    style={{
                        textAlign: "justify",
                    }}
                    >
                        I started my development journey in April 2021. Before that I had a career in private recreation club management and a short career in law enforcement. After my family relocated I decided to chase a passion in web and software development and enrolled in the Coding Dojo Bootcamp! After 9 months I graduated as a full stack developer, learning Python, Java, and Mern. I achieved a black belt, highest possible score for the exit exam, in the Java and Mern stacks. 
                    </p>
                    <p class="infotext"
                    style={{
                        textAlign: "justify",
                    }}>
                        When Im not coding, I enjoy spending time with my Wife and Son. I love spending time outdoors playing golf, going for a walk, or spending time in the Lake Tahoe area. 
                    </p>
                </div>
                <div class="col col-offset-1 aboutImg">
                    <img
                    class="frame img-fluid" 
                    style={{
                        minWidth: 300,
                        width:600,
                        borderRadius: 15
                    }}
                    src={famImg}
                    />
                </div>
            </div>
        </div>
        
        
    )
}



export default About;