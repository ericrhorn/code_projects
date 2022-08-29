import React from 'react';

import Row from 'react-bootstrap/Row';

import DailyMeal from './dayMeals';


const DailyMealView = ({mealData}) => {

    const nutrients = mealData.nutrients

    return (
        <>
            <h1>Meal Plan for the Day</h1>
            <br/>
            <h4>Nutrients</h4>
            <p>Calories: {nutrients.calories}</p>
            <p>Carbs: {nutrients.carbohydrates}</p>
            <p>Fat: {nutrients.fat}</p>
            <p>Protein: {nutrients.protein}</p>
            <br/>
            <h4>Meals</h4>
            <Row className="g-4">
            {mealData.meals.map((meal) => (
                        <DailyMeal key={meal.id} meal={meal}/>
                    ))}
            </Row>
        </>
    )
}

export default DailyMealView