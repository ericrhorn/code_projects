/* eslint-disable jsx-a11y/alt-text */
import "../style.css";
import gitImg from "../image/github.png"
import linkedin from "../image/linkedin.png"
import email from "../image/email.png"
import resume from "../image/dropbox.png"
import { useState } from 'react';

const Contact =()=>{

    const [isShown, setIsShown] = useState(false);


    return (
        <div>
            <div class="container contactIcons">
                <div class="row contactIcons ">
                    <div class="col">
                        <a href="mailto:baratheon.development@gmail.com?subject=I was just visiting your site&body=Hi Eric,">
                        <img
                                style={{
                                    width:70,
                                    height:70,
                                    marginTop: 5,
                                    marginBottom: 7
                                    
                                }}
                                src={email}
                                onMouseEnter={() => setIsShown(true)}
                                onMouseLeave={() => setIsShown(false)}
                            />
                        </a>
                        {isShown && (
                            <p>Email Me</p>
                        )}
                        
                    </div>

                    <div class="col">
                        <a 
                        href="https://github.com/ericrhorn"
                        target="blank"
                        >
                        <img
                            style={{
                                width:70,
                                height:70,
                                marginTop: 5,
                                
                            }}
                            src={gitImg}
                            onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)}
                        />
                        </a>
                        <div>
                        {isShown && (
                            <p 
                            style={{paddingTop:7}}
                            >GitHub</p>
                        )}
                        </div>
                    </div>

                    <div class="col">
                        <a href="https://www.linkedin.com/in/eric-horn-60143454?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHgrkd4GBSfSvwY9MLHv%2FcA%3D%3D"
                        target="blank"
                        >
                        <img
                            style={{
                                width:70,
                                height:70,
                                marginTop: 5,
                                
                            }}
                            src={linkedin}
                            onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)}
                        />
                        </a>
                        <div>
                        {isShown && (
                            <p
                            style={{paddingTop:4}}
                            >LinkedIn</p>
                        )}
                        </div>
                    </div>

                    <div class="col">
                        <a href="https://docs.google.com/document/d/1uLcO1LXtW7n0mFPpEdfcBy8NnZz-3UehVhr-DDH_uS0/edit?usp=sharing"
                        target="blank"
                        >
                        <img
                            style={{
                                width:70,
                                height:70,
                                marginTop: 5,
                                
                            }}
                            src={resume}
                            onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)}
                        />
                        </a>
                        {isShown && (
                            <p
                            style={{paddingTop:4}}
                            >Resume</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Contact;