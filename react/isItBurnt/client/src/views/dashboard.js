import React, { useEffect, useState } from "react";
import axios from "axios";


const Dashboard = (props) => {
    const [recipeList, setRecipeList] = useState([]);
    const {_id} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/recipe/show")
        .then((res) => {
            setRecipeList(res.data);
        })
        .catch((err) => console.log(err.data));
    }, [_id]);

    return (
        <div>
            <div className="headder1">
                <h1>Pet Shelter</h1>
            </div>
            <div>
                <h4>These pets are looking for a good home</h4>
            </div>
            <div class="col-8">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>URL</th>
                            <th>URL Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipeList.map((recipe, index) => (
                            <tr key={index}>
                                <td>{recipe._id}</td>
                                <td>{recipe.recipeName}</td>
                                <td>{recipe.recipeImage}</td>
                                <td>{recipe.recipeUrl}</td>
                                <td>{recipe.recipeUrlName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard;