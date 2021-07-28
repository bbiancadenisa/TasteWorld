import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

function AddRecipe() {

    return(
        <div className="add-recipe">
            <h1>You can add your recipe here</h1>
            <Link to="/menu"><Button variant="contained" color="primary" style={{ margin: "25px" }}>Back</Button></Link>
        </div>
    ); 
}

export default AddRecipe;