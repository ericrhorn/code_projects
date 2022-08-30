import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const SearchRes = ({recipe, recipeInfo}) => {

    const [recipeName, setRecipeName] = useState('')
    const [recipeImage, setRecipeImage] = useState('')
    const [recipeUrl, setRecipeUrl] = useState('')
    const [recipeUrlName, setRecipeUrlName] = useState('')
    const [recipeSummary, setRecipeSummary] = useState('')
    const [recipeInstructions, setRecipeInstructions] = useState('')
    const [recipeComments, setRecipeComments] = useState('')

    useEffect(() => {
        setRecipeName(recipeInfo.title || '');
        setRecipeImage(recipeInfo.image || '');
        setRecipeUrl(recipeInfo.sourceUrl || '');
        setRecipeUrlName(recipeInfo.sourceName || '');
        setRecipeSummary(recipeInfo.summary || '');
        setRecipeInstructions(recipeInfo.instructions || '');
    }, [recipeInfo]) 

    const newRecipeHandler = (e) => {
        e.preventDefault();
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
                        <input type="text" name='recipeName' value={recipeName} onChange={(e) => setRecipeName(e.target.value)} />
                        <input type="text" name='recipeImage' value={recipeImage} onChange={(e) => setRecipeImage(e.target.value)} />
                        <input type="text" name='recipeUrl' value={recipeUrl} onChange={(e) => setRecipeUrl(e.target.value)} />
                        <input type="text" name='recipeUrlName' value={recipeUrlName} onChange={(e) => setRecipeUrlName(e.target.value)} />
                        <textarea type="textarea" name='recipeSummary' value={recipeSummary} onChange={(e) => setRecipeSummary(e.target.value)} />
                        <textarea type="textarea" name='recipeInstructions' value={recipeInstructions} onChange={(e) => setRecipeInstructions(e.target.value)} />
                        <input type="text" name='recipeComments' value={recipeComments} onChange={(e) => setRecipeComments(e.target.value)} />
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