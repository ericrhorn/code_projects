/* eslint-disable jsx-a11y/alt-text */
import { FormControl, FormGroup, FormLabel, Button  } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
// import { openComposer } from "react-native-email-link";
import "../style.css";
import gitImg from "../git.png"
import linkedin from "../linkedin.png"
import email from "../email.jpeg"
import resume from "../file.png"

const Contact =()=>{

    // const openComposer = () => {

    // }


    return (
        <div>
            <div style={{
                textAlign: "center",
                paddingBottom: 25,
                fontFamily: "Ariel"
                }}>
                <h1>Contact Eric</h1>
            </div>
            {/* <div class="row contactPage">
                <div class="col col-md-6 contactForm"
                style={{
                    paddingLeft: 150,
                }}
                >
                    <Container>
                        <Form>
                            <FormGroup>
                                <FormLabel>Name</FormLabel>
                                <FormControl
                                    type="text"
                                    style={{
                                        width: 250
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>Email</FormLabel>
                                <FormControl
                                    type="email"
                                    style={{
                                        width: 250
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>Message</FormLabel>
                                <FormControl
                                    as="textarea"
                                    rows={5}
                                    style={{
                                        width: 450
                                    }}
                                />
                            </FormGroup>
                            <div>
                                <Button
                                    style={{
                                        marginTop: 20
                                    }}
                                    variant="primary" 
                                    type="submit">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </Container>
                </div> */}
                <div class="col col-md-12 moreContact"
                // style={{
                //     width: 800
                // }}
                >
                    <a href="mailto:baratheon.development@gmail.com?subject=I was just visiting your site&body=Hi Eric,">
                    <img
                            style={{
                                width:88,
                                height:88,
                                
                            }}
                            src={email}
                        />
                    </a>
                    
                    <a 
                    href="https://github.com/ericrhorn"
                    target="blank"
                    >
                    <img
                        style={{
                            width:70,
                            height:70,
                            // paddingTop:10
                            
                        }}
                        src={gitImg}
                    />
                    </a>
                    <a href="https://www.linkedin.com/in/eric-horn-60143454?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHgrkd4GBSfSvwY9MLHv%2FcA%3D%3D"
                    target="blank"
                    >
                    <img
                        style={{
                            width:78,
                            height:78,
                            
                        }}
                        src={linkedin}
                    />
                    </a>
                    <a href="https://docs.google.com/document/d/1uLcO1LXtW7n0mFPpEdfcBy8NnZz-3UehVhr-DDH_uS0/edit?usp=sharing"
                    target="blank"
                    >
                    <img
                        style={{
                            width:78,
                            height:78,
                            
                        }}
                        src={resume}
                    />
                    </a>
                    
                </div>
            </div>
        // </div>
    )
}



export default Contact;