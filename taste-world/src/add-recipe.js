import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

    addRecipe:{
    maxWidth: "400px",
    margin: "0 auto",
    textAlign: "center",
    },

    subTittle: {
        fontSize: "30px",
        fontFamily: "Dancing Script",
        fontWeight:"bold",
        color: "rgb(41, 41, 36)",
        marginBottom: "30px",
        paddingTop: "5px",
        
    },

    paragraph:{
        fontSize: "15px",
        familyFont : "Open Sans",
        fontWeight: "bold",
        color:"rgb(41, 41, 36)",
        paddingBottom:"10px",  

    },

    form:{
        color: "rgb(2, 104, 78)",
        fontWeight:"bold",
        fontSize: "20px",
        padding:"5px",
    },

    text:{
        width: "100%",
        padding: "6px 10 px",
        margin: "10px 0",
        border: "1px solid #ddd",
        boxSizing: "border-box",
        display: "block",
    },

   buttonAdd:{
       fontWeight:"bold",
       border: 0,
       padding: "15px",
       margin: "5px",
       borderRadius: "8px",
       cursor: "pointer",
       color:"white"
   }

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
        <div className={classes.addRecipe}>
            <Typography content="h1" className={classes.subTittle}>Add your recipe
                here</Typography>
            <Typography component="p" className={classes.paragraph}>Simpler than ever. After entering all the necessary data, just click "Add Recipe" and we will take care of the rest.</Typography>

            <form onSubmit={onSubmit} className={classes.form}>

                <label style={{textAlign : "left", display: "block"}}>Recipe Name</label>
                <textarea className={classes.text} 
                    type="text"
                    required
                    value={recipeName}
                    onChange={(e) => setRecipeName(e.target.value)}
                />

                <label style={{textAlign : "left", display: "block"}}>Recipe Ingredients</label>
                <textarea className={classes.text} style={{height: "80px"}}
                    required
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                ></textarea>

                <label style={{textAlign : "left", display: "block"}}>Preparation Time (in minutes)</label>
                <textarea className={classes.text}
                    required
                    value={prepTime}
                    onChange={(e) => setPrepTime(e.target.value)}
                ></textarea>

                <label style={{textAlign : "left", display: "block"}}>Preparation Instructions</label>
                <textarea className={classes.text} style={{height: "80px"}}
                    required
                    value={prepInstructions}
                    onChange={(e) => setPrepInstructions(e.target.value)}
                ></textarea>

                {error && <Typography style={{color: "red"}} >Eroare la trimiterea formularului!</Typography>}

                {success && <Typography style={{color: "green"}}>{success}</Typography>}

                <Button style={{backgroundColor: "rgb(2, 104, 78)"}} variant="contained" className={classes.buttonAdd } type="submit">Add Recipe</Button>
                <Link to="/menu" style={{ textDecoration: 'none',  }}><Button variant="contained" className={classes.buttonAdd } style={{backgroundColor: "rgb(2, 104, 78)"}}>Back</Button></Link>
            </form>
            </div>

    );
}

export default AddRecipe;