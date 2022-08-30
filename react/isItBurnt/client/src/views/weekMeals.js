import React, { useEffect, useState} from 'react';
import axios from 'axios';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


const WeeklyMeals = ({meal}) => {

    const [mealInfo, setMealInfo] = useState({});

    useEffect (() => {
        axios.get(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=a204b3541d2f4c0da0e019afe998f3c6`)
        .then((response)=>{
            console.log(response.data)
            setMealInfo(response.data)
        })
        .catch((err) => console.log(err))
    }, [meal.id]);

    return (
        <>
        <Col md={4}>
        <Card>
            <Card.Img style={{padding:10}} variant="top" src={mealInfo.image} />
            <Card.Body>
                <Card.Title>{mealInfo.title}</Card.Title>
                <Card.Text>
                </Card.Text>
                <a href={mealInfo.sourceUrl}>Full Recipe at {mealInfo.sourceName}</a>
                {/* <form onSubmit={newRecipeHandler}>
                    <div >
                        <input type="text" name='recipeName' value={recipeName} onChange={(e) => setRecipeName(e.target.value)} />
                        <input type="text" name='recipeImage' value={recipeImage} onChange={(e) => setRecipeImage(e.target.value)} />
                        <input type="text" name='recipeUrl' value={recipeUrl} onChange={(e) => setRecipeUrl(e.target.value)} />
                        <input type="text" name='recipeUrlName' value={recipeUrlName} onChange={(e) => setRecipeUrlName(e.target.value)} />
                        <textarea type="textarea" name='recipeSummary' value={recipeSummary} onChange={(e) => setRecipeSummary(e.target.value)} />
                        <textarea type="textarea" name='recipeInstructions' value={recipeInstructions} onChange={(e) => setRecipeInstructions(e.target.value)} />
                        <input type="text" name='recipeComments' value={recipeComments} onChange={(e) => setRecipeComments(e.target.value)} />
                    </div>
                    <button className="btn btn-primary mt-3" type='submit'>Save Recipe</button>
                </form> */}
            </Card.Body>
        </Card>
        
        </Col>
        
        </>
    )
}

export default WeeklyMeals