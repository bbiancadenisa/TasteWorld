import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    header: {
        fontSize: "30px",
        marginBottom: "30px",
        color: "rgb(2, 104, 78)",
        fontWeight:"bold"
    },

}));


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function AddRecipe() {

    const classes = useStyles();

    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [prepTime, setPrepTime] = useState('');
    const [prepInstructions, setPrepInstructions] = useState('');
    const [error,setError] = useState();
    const [success, setSuccess] = useState();

    const history = useHistory();

    const onSubmit = async (event) => {
        event.preventDefault();
        const payload = {
            title: recipeName,
            ingredients: ingredients,
            prepTime: prepTime,
            prepInstructions: prepInstructions
        }
        try {

            let res = await axios.post('http://localhost:3001/add-recipe', payload)
            setSuccess("Recipe added successfully!");
            await sleep(3000);
            history.push("/menu");
            console.log(res);  
        } catch (e) {
            console.log(e);
            setError(e);
        } 
    }

    return (
        <div className="add-recipe">
            <Typography content="h1"  className={classes.header}>Add your recipe
                here</Typography>
            <Typography component="p">Simpler than ever. After entering all the necessary data, just click "Add Recipe" and we will take care of the rest.</Typography>
            <form onSubmit={onSubmit}>
                <label>Recipe Name</label>
                <input
                    type="text"
                    required
                    value={recipeName}
                    onChange={(e) => setRecipeName(e.target.value)}
                />

                <label>Recipe Ingredients</label>
                <textarea
                    required
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                ></textarea>

                <label>Preparation Time(in minutes)</label>
                <textarea
                    required
                    value={prepTime}
                    onChange={(e) => setPrepTime(e.target.value)}
                ></textarea>

                <label>Preparation Instructions</label>
                <textarea
                    required
                    value={prepInstructions}
                    onChange={(e) => setPrepInstructions(e.target.value)}
                ></textarea>
                {error && <Typography style={{color: "red"}} >Eroare la trimiterea formularului!</Typography>}
                {success && <Typography style={{color: "green"}}>{success}</Typography>}
                <Button variant="contained" type="submit">Add Recipe</Button>
            </form>
        </div>

    );
}

export default AddRecipe;