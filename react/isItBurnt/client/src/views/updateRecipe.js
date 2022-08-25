import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import Container from "react-bootstrap/esm/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';




const UpdateRecipe = (props) => {
    const [recipeName, setRecipeName] = useState('');
    const [recipeImage, setRecipeImage] = useState('');
    const [recipeUrl, setRecipeUrl] = useState('');
    const [recipeUrlName, setRecipeUrlName] = useState('');
    const [recipeComments, setRecipeComments] = useState('');
    // const [recipe, setRecipe] = useState({
    //     recipeName : '',
    //     recipeImage : '',
    //     recipeUrl : '',
    //     recipeUrlName : '',
    // });
     const {id} = useParams();


    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipe/one/${id}`)
        .then((res) => {
            console.log(res)
            console.log(res.data)
            setRecipeName(res.data.recipeName)
            setRecipeImage(res.data.recipeImage)
            setRecipeUrl(res.data.recipeUrl)
            setRecipeUrlName(res.data.recipeUrlName)
            setRecipeComments(res.data.recipeComments)
        })
        .catch((err) => console.log(err.data));
    }, [id]);

    const updateRecipeHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/recipe/update/${id}`, {
            recipeName,
            recipeImage,
            recipeUrl,
            recipeUrlName,
        })
        .then((res) => {
            console.log(res)
            console.log(res.data)
            alert('This recipe has been updated')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <Container>
            <form onSubmit={updateRecipeHandler}>
            <input type="text" name='recipeName' value={recipeName} onChange={(e) => setRecipeName(e.target.value)} />
            <input type="text" name='recipeImage' value={recipeImage} onChange={(e) => setRecipeName(e.target.value)} />
            <input type="text" name='recipeUrl' value={recipeUrl} onChange={(e) => setRecipeName(e.target.value)} />
            <input type="text" name='recipeUrlName' value={recipeUrlName} onChange={(e) => setRecipeName(e.target.value)} /> 
            <input type="text" name='recipeComments' value={recipeComments} onChange={(e) => setRecipeName(e.target.value)} />
            <button className="btn btn-primary mt-3" type='submit'>Save Recipe</button>
            </form>
            <h1 style={{marginBottom: 40}}>Update Recipe</h1>
            <Row>
                <Col md={4} style={{marginBottom: 30}}>
                    <Card>
                    <Card.Img variant="top" src={recipeImage} />
                    <Card.Body>
                        <Card.Title>{recipeName}</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <a href={recipeUrl}>Full Recipe at {recipeUrlName}</a>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default UpdateRecipe;