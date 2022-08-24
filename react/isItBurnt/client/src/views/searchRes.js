import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';






const SearchRes = ({recipe, recipeInfo, value}) => {

    // useEffect(() => console.log("changing state"),[])

    // export const MakeComponent = props => {
    //     const { path, value, info, update } = props;
      
    //     const [val, setVal] = useState(value);
    //     useEffect(() => { setVal(value)}, [value] )
      
    //    return (...)
    //   }

    const [recipeName, setRecipeName] = useState(value)
    useEffect(()=> setRecipeName(recipeInfo.title), [recipeInfo.title])
    const [recipeImage, setRecipeImage] = useState(value)
    useEffect(()=> setRecipeImage(recipeInfo.image), [recipeInfo.image])
    const [recipeUrl, setRecipeUrl] = useState(value)
    useEffect(()=> setRecipeUrl(recipeInfo.sourceUrl), [recipeInfo.sourceUrl])
    const [recipeUrlName, setRecipeUrlName] = useState(value)
    useEffect(()=> setRecipeUrlName(recipeInfo.sourceName), [recipeInfo.sourceName])


    // const title = recipeInfo.title
    // const image = recipeInfo.image
    // const url = recipeInfo.sourceUrl
    // const urlName = recipeInfo.sourceName

    // const [newRecipe, setNewRecipe] = useState({
    //     recipeName : title,
    //     recipeImage : image,
    //     recipeUrl : url,
    //     recipeUrlName : urlName,
    //     recipeComments : "",
    // })

    // const handleChange = (e) => {
    //     setNewRecipe({
    //       ...newRecipe,
    //       [e.target.name] : e.target.value,
    //     })
    //   }

    const newRecipeHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/recipe/create-recipe', {
            recipeName,
            recipeImage,
            recipeUrl,
            recipeUrlName,
        })
        // axios.post('http://localhost:8000/api/recipe/create-recipe', newRecipe)
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
            <Card.Img variant="top" src={recipe.image} />
            <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Text>
                {recipe.id}
                </Card.Text>
                <a href={recipeInfo.sourceUrl}>Full Recipe at {recipeInfo.sourceName}</a>
                <form onSubmit={newRecipeHandler}>
                    <div>
                        <input type="text" name='recipeName' value={recipeName} onChange={(e) => setRecipeName(e.target.value)} />
                        <input type="text" name='recipeImage' value={recipeImage} onChange={(e) => setRecipeName(e.target.value)} />
                        <input type="text" name='recipeUrl' value={recipeUrl} onChange={(e) => setRecipeName(e.target.value)} />
                        <input type="text" name='recipeUrlName' value={recipeUrlName} onChange={(e) => setRecipeName(e.target.value)} />
                        {/* <input type="text" name='recipeComments' value={newRecipe.recipeComments} onChange={(e) => setRecipeName(e.target.value)} /> */}
                    </div>
                    <button className="btn btn-primary mt-3" type='submit'>Save Recipe</button>
                </form>
            </Card.Body>
        </Card>
        </>
        //readyInMinutes
        //servings
        //sourceName
        //sourceUrl
    )

}

export default SearchRes;