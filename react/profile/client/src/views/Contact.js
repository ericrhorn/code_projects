import { FormControl, FormGroup, FormLabel, Button  } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import "../style.css";

const Contact =()=>{
    return (
        <div>
            <div style={{textAlign: "center"}}>
                <h1>Contact Eric!</h1>
                <h2>this is how to contact eric with questions or job offers!</h2>
            </div>
            <div class="row contactPage">
                <div class="col col-md-6 contactForm">
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
                </div>
                {/* <div class="col col-md-4 moreContact">
                    <p>here is some other contact info</p>
                </div> */}
            </div>
        </div>
    )
}



export default Contact;