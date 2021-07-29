import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';


function RecipeList() {

    const [recipesList, setRecipesList] = useState(null);
    const [open,setOpen] = useState(false)
    console.log(recipesList)

    useEffect(async () => {
        const result = await axios({
            url: `http://localhost:3001/all-recipes`,
            method: "GET"
        })
        setRecipesList(result.data);
    }, [])

    // useEffect(async () => {
    //     const result = await axios({
    //         url: `http://localhost:3001/all-recipes${id}`,
    //         method: "GET"
    //     })
    //     setRecipesList(result.data);
    // }, [open])

    // const openModal = (recipe) => {
    //     alert("Reteta");
    // }

    

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    if (!recipesList) {
        return <div></div>
    } else {
        return (
            <div className="recipe-list">
                <h1>This is the recipe-list</h1>
                {recipesList.map((recipe) => (
                    <div className="recipe-preview" key={recipe.id}>
                        <h2>{recipe.title}</h2>
                        <p>{recipe.ingredients}</p>
                        <Button onClick={handleOpen}>Modal</Button>
                    </div>
                ))}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <p>Hello</p>
                </Modal>
                <Link to="/menu"><Button variant="contained" color="primary" style={{ margin: "25px" }}>Back</Button></Link>
            </div>
        );
    }
}

export default RecipeList;