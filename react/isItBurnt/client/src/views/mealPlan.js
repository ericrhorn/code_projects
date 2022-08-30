import React, {useState} from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DailyMealPlan from './showDailyMealPlan';
import WeeklyMealPlan from './showWeeklyMealPlan';



const MealPlan = (props) => {

    const [show, setShow] = useState(false);


    const dailyMealClick = (e) => {
        setShow('daily')
    }
 
    const weeklyMealClick = (e) => {
        setShow('weekly')
    }

    return (
        <>
    <h1>Meal Plans</h1>
        <Container style={{marginBottom: 50 }}>
            <Row style={{marginBottom: 50 }}>
                <Col>
                    <Button style={{marginRight: 30}} onClick={dailyMealClick}>Create a Daily Meal Plan</Button>
                    <Button  onClick={weeklyMealClick}>Create a Weekly Plan</Button>
                </Col>
            </Row>
            <Row>
                {
                (show === 'daily') ? <DailyMealPlan /> : null
                }
                {
                (show === 'weekly') ? <WeeklyMealPlan /> : null
                }
            </Row>
        </Container>
        </>
    ) 
}

export default MealPlan