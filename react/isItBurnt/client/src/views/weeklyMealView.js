import Row from 'react-bootstrap/Row';

import WeeklyMeals from './weekMeals';

const WeeklyyMealView = ({mealData}) => {

    console.log('meal view', mealData)
    console.log('meal week', mealData.week)
    console.log('meal day', mealData.week.monday)
    console.log('meal day meals', mealData.week.monday.meals)


    const monNutrients = mealData.week.monday.nutrients
    const tueNutrients = mealData.week.tuesday.nutrients
    const wedNutrients = mealData.week.wednesday.nutrients
    const thursNutrients = mealData.week.thursday.nutrients
    const friNutrients = mealData.week.friday.nutrients
    
    console.log("monday nureients", monNutrients)
    console.log("tuesday nureients", tueNutrients)
    console.log("wednesday nureients", wedNutrients)
    console.log("thursday nureients", thursNutrients)
    console.log("friday nureients", friNutrients)



    return (
        <>
            <Row className="g-4">
                <Row style={{paddingBottom: 20}}>
                    <h4>Monday</h4>
                    <p>Calories: {monNutrients.calories}</p>
                    <p>Carbs: {monNutrients.carbohydrates}</p>
                    <p>Fat: {monNutrients.fat}</p>
                    <p>Protein: {monNutrients.protein}</p>
                    {mealData.week.monday.meals.map((meal) => (
                        <WeeklyMeals key={meal.id} meal={meal}/>
                    ))}
                </Row>
                <Row style={{paddingBottom: 20}}>
                    <h4>Tuesday</h4>
                    <p>Calories: {tueNutrients.calories}</p>
                    <p>Carbs: {tueNutrients.carbohydrates}</p>
                    <p>Fat: {tueNutrients.fat}</p>
                    <p>Protein: {tueNutrients.protein}</p>
                    {mealData.week.tuesday.meals.map((meal) => (
                        <WeeklyMeals key={meal.id} meal={meal}/>
                    ))}
                </Row>
                <Row style={{paddingBottom: 20}}>
                    <h4>Wednesday</h4>
                    <p>Calories: {wedNutrients.calories}</p>
                    <p>Carbs: {wedNutrients.carbohydrates}</p>
                    <p>Fat: {wedNutrients.fat}</p>
                    <p>Protein: {wedNutrients.protein}</p>
                    {mealData.week.wednesday.meals.map((meal) => (
                        <WeeklyMeals key={meal.id} meal={meal}/>
                    ))}
                </Row>
                <Row style={{paddingBottom: 20}}>
                    <h4>Thursday</h4>
                    <p>Calories: {thursNutrients.calories}</p>
                    <p>Carbs: {thursNutrients.carbohydrates}</p>
                    <p>Fat: {thursNutrients.fat}</p>
                    <p>Protein: {thursNutrients.protein}</p>
                    {mealData.week.thursday.meals.map((meal) => (
                        <WeeklyMeals key={meal.id} meal={meal}/>
                    ))}
                </Row>
                <Row style={{paddingBottom: 20}}>
                    <h4>Friday</h4>
                    <p>Calories: {friNutrients.calories}</p>
                    <p>Carbs: {friNutrients.carbohydrates}</p>
                    <p>Fat: {friNutrients.fat}</p>
                    <p>Protein: {friNutrients.protein}</p>
                    {mealData.week.friday.meals.map((meal) => (
                        <WeeklyMeals key={meal.id} meal={meal}/>
                    ))}
                </Row>
            </Row>
        </>
    )
}

export default WeeklyyMealView