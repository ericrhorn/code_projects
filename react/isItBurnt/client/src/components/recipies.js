import React, { useEffect, useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import Main from '../views/main';


const Recipies = ({RecipeList}) => {

    return (
        <ul>
        {/* {RecipeList.map((recipe, index) => (
        <li key={index}>{recipe.title} - {recipe.cuisine} </li>
        ))} */}
    </ul> 
    )
}

export default Recipies