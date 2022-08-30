import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const SearchRes = ({recipe, recipeInfo, value}) => {

    const [recipeName, setRecipeName] = useState(recipeInfo?.title)
    const [recipeImage, setRecipeImage] = useState(recipeInfo?.image)
    const [recipeUrl, setRecipeUrl] = useState(recipeInfo?.sourceUrl)
    const [recipeUrlName, setRecipeUrlName] = useState(recipeInfo?.sourceName)
    const [recipeSummary, setRecipeSummary] = useState(recipeInfo?.summary)
    const [recipeInstructions, setRecipeInstructions] = useState(recipeInfo?.instructions)
    const [recipeComments, setRecipeComments] = useState('')

    const newRecipeHandler = (e) => {
        e.preventDefault();
        console.log({
            recipeName,
            recipeImage,
            recipeUrl,
            recipeUrlName,
            recipeComments,
            recipeSummary,
            recipeInstructions,
        }) 
        axios.post('http://localhost:8000/api/recipe/create-recipe', {
            recipeName,
            recipeImage,
            recipeUrl,
            recipeUrlName,
            recipeComments,
            recipeSummary,
            recipeInstructions,
        }, {withCredentials: true})
        .then((res) => {
            console.log(res)
            console.log(res.data)
            alert('This recipe has been saved')
        })
        .catch((err) => {
            console.log(err)
        })
    }


    return (
        <>
        <Card>
            <Card.Img style={{padding:10}} variant="top" src={recipe.image} />
            <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Text>
                </Card.Text>
                <a href={recipeInfo.sourceUrl}>Full Recipe at {recipeInfo.sourceName}</a>
                <form onSubmit={newRecipeHandler}>
                    <div>
                    {/* <div style={{display: 'none'}}> */}
                        <input type="text" name='recipeName' value={recipeInfo?.title} onChange={(e) => setRecipeName(e.target.value)} />
                        <input type="text" name='recipeImage' value={recipeInfo?.image} onChange={(e) => setRecipeImage(e.target.value)} />
                        <input type="text" name='recipeUrl' value={recipeInfo?.sourceUrl} onChange={(e) => setRecipeUrl(e.target.value)} />
                        <input type="text" name='recipeUrlName' value={recipeInfo?.sourceName} onChange={(e) => setRecipeUrlName(e.target.value)} />
                        <textarea type="textarea" name='recipeSummary' value={recipeInfo?.summary} onChange={(e) => setRecipeSummary(e.target.value)} />
                        <textarea type="textarea" name='recipeInstructions' value={recipeInfo?.instructions} onChange={(e) => setRecipeInstructions(e.target.value)} />
                    </div>
                    <button className="btn btn-primary mt-3" type='submit'>Save Recipe</button>
                </form>
            </Card.Body>
        </Card>
        <br/>
        </>
    )

}

export default SearchRes;