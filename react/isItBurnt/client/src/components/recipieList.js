import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Recipie from "./recipies"
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';





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
        {/* <CardGroup>
        <Card>
            <Card.Img style={{height:200, width:300}} variant="top" src={recipeInfo.image} />
            <Card.Body>
            <Card.Title>{recipeInfo.title}</Card.Title>
            <Card.Text>
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <a href={recipeInfo.sourceUrl}>Full Recipe at {recipeInfo.sourceName}</a>
            </Card.Footer>
        </Card>
        </CardGroup> */}
        <Row xs={1} md={2} className="g-4">
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={recipeInfo.image} />
                    <Card.Body>
                        <Card.Title>{recipe.title}</Card.Title>
                        <Card.Text>
                        {recipe.id}
                        </Card.Text>
                        <a href={recipeInfo.sourceUrl}>Full Recipe at {recipeInfo.sourceName}</a>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
     
        </>
        //readyInMinutes
        //servings
        //sourceName
        //sourceUrl
   
    )

}

export default RecipeList