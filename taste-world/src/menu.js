import react, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({

    menu:{
        maxWidth: "400px",
        margin: "0 auto",
        textAlign: "center",
        minHeight: "633px",
    },

    btnGroup: {
        display: "block",
        backgroundColor: "rgb(2, 104, 78)",
        fontWeight: "bold",
        margin:"5px",
        color:"white"
    },
    buttonWrapper: {
        display: "flex",
        flexDirection: "column",
        width: "auto",
        alignContent: 'center',
        alignItems: 'center',
    },

    menuName:{
        fontSize: "40px",
        marginBottom: "10px",
        marginTop: "20px",
        color: "rgb(41, 41, 36)",
        fontWeight:"bold",
        paddingTop: "5px",
        fontFamily: "Dancing Script",
    },

    information:{
        

        }
})


function Menu() {
    const classes = useStyles();

    return (
        <div className={classes.menu}>
            <Typography component='h1' className={classes.menuName}>
                Menu
            </Typography>
            <div className={classes.menuBody}>
            <div className={classes.information}>
                <Typography content="p" className={classes.information}>
                While eating at a restaurant is an enjoyable and convenient occasional treat, most individuals and families prepare their meals at home. To make breakfast, lunch, and dinner daily, these persons must have the required foods and ingredients on hand and ready to go
                </Typography>
                
            </div>
            <div className={classes.buttonWrapper}>
                <Link to="/recipe-list" style={{ textDecoration: 'none' }}><Button variant="contained" style={{ margin: "25px", backgroundColor: "rgb(2, 104, 78)" }} className={classes.btnGroup}>
                    Recipe List</Button></Link>
                <Link to="/add-recipe" style={{ textDecoration: 'none' }}><Button variant="contained"  className={classes.btnGroup} style={{backgroundColor: "rgb(2, 104, 78)"}} >Add Recipe</Button></Link>
                <Link to="/" style={{ textDecoration: 'none', margin:"15px",  }}><Button variant="contained"  className={classes.btnGroup} style={{backgroundColor: "rgb(2, 104, 78)"}} >Log Out</Button></Link>
            </div>
            <Typography content="p" className={classes.information}>
                Store all your favorite recipes in one place!TasteWorld is a recipe manager with search and import features. TasteWorld lets you create your own digital cookbook. Build your own recipe database.It is you and your own cookery!

                </Typography>
                </div>
        </div>
    );
}

export default Menu;