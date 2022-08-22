import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';






const RecipeList = ({recipe}) => {

    const [recipeInfo, setRecipeInfo] = useState("")

    useEffect (() => {
        axios.get(`https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=a204b3541d2f4c0da0e019afe998f3c6`)
        .then((response)=>{
            console.log(response.data)
            setRecipeInfo(response.data)
        })
        .catch((err) => console.log(err))
    }, [recipe.id]);

    return (
        <>
        <Col md={6}>
            <Card>
                <Card.Img variant="top" src={recipeInfo.image} />
                <Card.Body>
                    <Card.Title>{recipe.title}</Card.Title>
                    <Card.Text>
                    {recipe.id}
                    </Card.Text>
                    <a href={recipeInfo.sourceUrl}>Full Recipe at {recipeInfo.sourceName}</a>
                </Card.Body>
            </Card>
        </Col>
        </>
        //readyInMinutes
        //servings
        //sourceName
        //sourceUrl
    )

}

export default RecipeList