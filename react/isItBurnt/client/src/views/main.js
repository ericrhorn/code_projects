import React, { useEffect, useState} from 'react';
import {navigate} from '@gatsbyjs/reach-router'
import cookingImg from '../images/cooking.jpg'
import Image, { propTypes } from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Recipies from "../components/recipies"



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