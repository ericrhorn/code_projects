import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchRes from '../views/searchRes';






const RecipeList = ({recipe, props}) => {


    const [recipeInfo, setRecipeInfo] = useState([])
    // const [recipeName, setRecipeName] = useState("")

    // const preloadedValues = {
    //     firstName : {recipe.title}
    // }
    // const title = recipe.title
    // const image = recipe.image
    // const url = moreData.sourceUrl
    // const urlName = moreData.sourceName

    // const [newRecipe, setNewRecipe] = useState({
    //     recipeName : title,
    //     recipeImage : image,
    //     recipeUrl : url,
    //     recipeUrlName : urlName,
    // })

    // const handleChange = (e) => {
    //     setNewRecipe({
    //       ...newRecipe,
    //       [e.target.name] : e.target.value,
    //     })
    //   }

    // const newRecipeHandler = (e) => {
    //     e.preventDefault();
    //     axios.post('http://localhost:8000/api/recipe/create-recipe', newRecipe)
    //     .then((res) => {
    //         console.log(res)
    //         console.log(res.data)
    //         alert('This recipe has been saved')
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // }

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
            <SearchRes recipe={recipe} recipeInfo={recipeInfo}/>
            {/* <Card>
                <Card.Img variant="top" src={recipeInfo.image} />
                <Card.Body>
                    <Card.Title>{recipe.title}</Card.Title>
                    <Card.Text>
                    {recipe.id}
                    </Card.Text>
                    <a href={recipeInfo.sourceUrl}>Full Recipe at {recipeInfo.sourceName}</a>
                    <form onSubmit={newRecipeHandler}>
                        <div >
                            <input type="text" name='recipeName' value={newRecipe.recipeName} onChange={handleChange} />
                            <input type="text" name='recipeImage' value={newRecipe.recipeImage} onChange={handleChange} />
                            <input type="text" name='recipeUrl' value={newRecipe.recipeUrl} onChange={handleChange} />
                            <input type="text" name='recipeUrlName' value={newRecipe.recipeUrlName} onChange={handleChange} />
                        </div>
                        <button className="btn btn-primary mt-3" type='submit'>Save Recipe</button>
                    </form>
                </Card.Body>
            </Card> */}
        </Col>
        </>
        //readyInMinutes
        //servings
        //sourceName
        //sourceUrl
    )

}

export default RecipeList;