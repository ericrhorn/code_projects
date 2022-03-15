/* eslint-disable jsx-a11y/alt-text */
import "../style.css";
import gitImg from "../image/github.png"
import joinMe from "../image/joinMe.png"
import marketPlanner from "../image/marketPlanner.png"




const Projects =()=>{
    return (
        <div>
            <div>
                <h1 style={{paddingBottom: 50, textAlign: "center",}}
                >My Projects</h1>
            </div>
            <div class="container-fluid projCont">
                <div class="row projRow ">
                    <div class="col col-offset-1 projInfo">
                        <h3 style={{color: "blue"}}>Join Me</h3>
                        <p>Technologies Used: Java | Java Spring | MySql</p>
                        <p>Join Me is a web app designed for people to create and join local events. See what events your friends created and which events they are attending. View the events location and price and follow the events link to the official page to purchase tickets if nessesary. 
                        </p>
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
                    <div class="col col-offset-1 ">
                        <img
                        class="frame img-fluid"
                        style={{
                            minWidth: 300,
                            width: 500,
                        }}
                        src={joinMe}
                        />
                    </div>
                </div>
                <div class="row projRow">
                    <div class="col col-offset-1 projInfo">
                    <h3 style={{color: "blue"}}>Market Planner</h3>
                        <p>Technologies Used: React | Express | MongoDB | Finance API</p>
                        <p>Market Planner is a web app designed to view ticker informaiton from selected stock to provide historical API data. Future use of this app would include a paid API that includes current market data.  </p>
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
                    <div class="col col-offset-1">
                        <img
                        class="frame img-fluid"
                        style={{
                            minWidth: 300,
                            width: 500,
                        }}
                        src={marketPlanner}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Projects;