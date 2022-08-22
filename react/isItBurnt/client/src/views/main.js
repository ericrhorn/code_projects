import React from 'react';
import cookingImg from '../images/cooking.jpg'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



const Main = (props) => {



    return (
        <>
        <h1>Lets Start Cooking!</h1>
        <Container>
            <Row>
                <Col sm={4}>
                    <Button href='/recipies' className='mt-2' style={{width:300}}>Search Recipies</Button>
                    <br />
                    <Button href='/meal_plan' className='mt-4' style={{width:300}}>Create a Meal Plan</Button>
                    <br />
                </Col>
                <Col sm={8}>
                    <Image fluid rounded src={cookingImg} alt="cooking"/>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Main