import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({

    content: {
        fontSize: "25px",
        fontFamily: "Dancing Script",
        color: "rgb(41, 41, 36)",
        paddingLeft: "10px"
    },

    modalWrapper: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

    modalBody: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: 'white',
        margin: "0 auto",
        borderRadius: "10px",
        width: 500
    },



    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },

    recipeTitle: {
        fontSize: "30px",
        marginBottom: "30px",
        color: "rgb(41, 41, 36)",
        fontWeight: "bold",
        paddingTop: "5px",
        fontFamily: "Dancing Script",

    },

    recipeName: {
        fontSize: "30px",
        display: "flex",
        fontWeight: "bold",
        marginBottom: "-1px",
        fontFamily: "Dancing Script",
        paddingLeft: "10px"
    },

    summary: {
        display: "flex",
        fontWeight: "bold",
        paddingLeft: "10px",
        fontSize: "20px"

    },

    learnMore: {
        marginLeft: "100px",
        fontWeight: "bold"

    },




});

function RecipeList() {

    const classes = useStyles();
    const history = useHistory();

    const [recipesList, setRecipesList] = useState(null);
    const [open, setOpen] = useState(false);
    const [recipe, setRecipe] = useState();
    console.log(recipesList)

    useEffect(async () => {
        const result = await axios({
            url: `http://localhost:3001/all-recipes`,
            method: "GET"
        })
        setRecipesList(result.data);
    }, [])

    useEffect(async () => {
        try {
            const result = await axios({
                url: `http://localhost:3001/verifyUser`,
                method: "GET"
            })
        }
        catch (e) {
            history.push("/");
        }
    }, [])

    const handleOpen = async (id) => {
        const result = await axios({
            url: `http://localhost:3001/single-recipe/${id}`,
            method: "GET"
        })
        setRecipe(result.data);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    if (!recipesList) {
        return <div></div>
    } else {
        return (<div style={{ display: "flex" ,flexDirection: "column"}}>
            <div className="recipe-list" style={{alignItems: "center",justifyContent: "center"}}>
                {recipesList.map((recipe) => (<div key={recipe._id}>
                    <div>
                        <Card style={{ backgroundColor: "white" }} component={Paper} elevation={10} class="recipeAnimation">
                            <CardContent className={classes.cards}>
                                <Typography className={classes.recipeName}  gutterBottom>
                                    {recipe.title}
                                </Typography>
                                <Divider />
                                <Typography variant="body2" component="p" className={classes.summary}>
                                    {recipe.prepTime} minutes
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Button onClick={() => handleOpen(recipe._id)} variant="contained" style={{ color: "white", backgroundColor: "rgb(2, 104, 78)" }} className={classes.learnMore}>Learn More</Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>

                ))}
                {recipe && <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div className={classes.modalWrapper}>
                        <div className={classes.modalBody}>
                            <Typography style={{ fontFamily: "Dancing Script", backgroundColor: "rgb(2, 104, 78, 0.9)", color: "white", fontWeight: "bold", fontSize: "30px", borderRadius: "10px 10px 10px 10px ", textAlign: "center", marginBottom: "10px", padding: "10px" }} >{recipe.title}</Typography>
                            <Typography className={classes.content} style={{ marginBottom: "5px" }}>Preparation time: {recipe.prepTime} min</Typography>
                            <Typography className={classes.content} style={{ marginBottom: "5px" }}>Ingredients:  {recipe.ingredients}</Typography>
                            <Typography className={classes.content} style={{ marginBottom: "5px" }}>Instructions:  {recipe.prepInstructions}</Typography>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Button style={{ backgroundColor: "rgb(2, 104, 78, 0.9)", margin: "10px", fontWeight: "bold", color: "white" }} onClick={handleClose} variant="contained">Close me</Button>
                            </div>
                        </div>
                    </div>
                </Modal>}
            </div>
            <div style={{display: "flex",justifyContent: "center"}}>
            <Button variant="contained" style={{ margin: "25px", backgroundColor: "rgb(2, 104, 78)", color: "white", borderRadius: "8px", cursor: "pointer", fontWeight: "bold", alignSelf: "flex-start" }}>Previous</Button>
            <Button variant="contained" style={{ margin: "25px", backgroundColor: "rgb(2, 104, 78)", color: "white", borderRadius: "8px", cursor: "pointer", fontWeight: "bold", alignSelf: "flex-start" }} onClick={() => history.goBack()}>Back</Button>
            <Button variant="contained" style={{ margin: "25px", backgroundColor: "rgb(2, 104, 78)", color: "white", borderRadius: "8px", cursor: "pointer", fontWeight: "bold", alignSelf: "flex-start" }}>Next</Button>
            </div>
        </div>);
    }
}

export default RecipeList;