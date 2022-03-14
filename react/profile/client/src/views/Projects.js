/* eslint-disable jsx-a11y/alt-text */
import "../style.css";
import gitImg from "../image/github.png"
import joinMe from "../image/joinMe.png"




const Projects =()=>{
    return (
        <div>
            <div>
                <h1 style={{paddingBottom: 50, textAlign: "center",}}
                >My Projects</h1>
            </div>
            <div class="container-flex projCont">
                <div class="col-md-12">
                    <div class="row projRow">
                        <div class="col-md-6 projCol">
                            <h3 style={{color: "blue"}}>Join Me</h3>
                            <p>Technologies Used: Java | Java Spring | MySql</p>
                            <p>Join Me is a web app designed for people to create and join local events. See what events your friends created and which events they are attending. View the events location and price and follow the events link to the official page to purchase tickets if nessesary. </p>
                        </div>
                        <div class="col-md-6 projCol frame img-fluid">
                            <img
                            style={{
                                
                                minWidth: 250,
                                width:500,
                                borderRadius: 15
                            }}
                            src={joinMe}
                            />
                        </div>
                        <a 
                            href="https://github.com/ericrhorn/code_projects/tree/main/java/events"
                            target="blank"
                            >
                            <img
                                style={{
                                    width:70,
                                    height:70,
                                    marginTop: 5,
                                    marginLeft: 15,
                                    
                                }}
                                src={gitImg}
                            />
                            </a>
                    </div>
                    <div class="row projRow">
                        <div class="col-md-7 projCol">
                            <h4>project</h4>
                        </div>
                        <div class="col-md-5 projCol">
                            <h4>image</h4>
                        </div>
                    </div>
                    <div class="row projRow">
                        <div class="col-md-7 projCol">
                            <h4>project</h4>
                        </div>
                        <div class="col-md-5 projCol">
                            <h4>image</h4>
                        </div>
                    </div>
                    <div class="row projRow">
                        <div class="col-md-7 projCol">
                            <h4>project</h4>
                        </div>
                        <div class="col-md-5 projCol">
                            <h4>image</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Projects;