import react , {useState} from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    
})


function Menu() {
    const styles = useStyles();

    return (
        <div className="menu">
            <Typography component='h1'>
                This is the menu
            </Typography>
            <Link to="/recipe-list"><Button variant="contained" color="primary"  style={{ margin: "25px" }}>Go to List</Button></Link>
            <Link to="/add-recipe"><Button variant="contained" color="primary">Add Recipe</Button></Link>
        </div>
    );
}

export default Menu;