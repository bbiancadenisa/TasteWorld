import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

function RecipeList() {
    const [recipes, setRecipes] = useState([
    {name: 'pancakes', ingredients:'milk, eggs', id: 1},
    {name: 'pancakes', ingredients:'milk, eggs', id: 2},
    {name: 'pancakes', ingredients:'milk, eggs', id: 3}
    ]);

    return(
        <div className="recipe-list">
            <h1>This is the recipe-list</h1>
            {recipes.map((recipe) => (
                <div className="recipe-preview" key={recipe.id}>
                    <h2>{recipe.name}</h2>
                    <p>{recipe.ingredients}</p>
                    
                </div>
            ))}
            <Link to="/menu"><Button variant="contained" color="primary" style={{ margin: "25px" }}>Back</Button></Link>
        </div>
    ); 
}

export default RecipeList;