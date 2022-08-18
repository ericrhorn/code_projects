import React, { useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Main from '../views/main';
import {navigate} from '@gatsbyjs/reach-router'
import cookingImg from '../images/cooking.jpg'
import Image, { propTypes } from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import RecipeList from '../components/recipieList';






const MealPlan = (props) => {





    return (
        <>
    <h1>Recipies</h1>
        <Container style={{marginBottom: 50, border: 'solid' }}>
            <Row>
                <Col style={{border: 'solid' }} className="text-center">
                    <h4>Create a Day Meal Plan</h4>
                    <Button>Create Plan</Button>
                </Col>
                <Col style={{border: 'solid' }} className="text-center">
                    <h4>Create a Weekly Meal Plan</h4>
                <Button>Create Plan</Button>
                </Col>
            </Row>
        </Container>

        </>
    ) 
}

export default MealPlan