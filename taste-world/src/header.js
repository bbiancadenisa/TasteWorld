import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>({

    headerTittle:{
        fontFamily: "Dancing Script, italic",
        fontSize: "50px",   
    },

    header:{
        height: "120px",
        backgroundColor: "rgb(2, 104, 78, 0.7)",
        color: "white",
        borderRadius:"0 0 30% 30%"
    },

    headerDescription:{
        familyFont : "Open Sans, sans-serif",
        fontSize: 16,
    }

})); 

function Header() {

    const classes = useStyles();

    return(
        <div className={classes.header}>
            <Typography content="h1" className={classes.headerTittle}>
                TasteWorld
            </Typography>
            <Typography content="p" className={classes.headerDescription}>
            - the easiest way to save and access your recipes at any time -
            </Typography>
        </div>
    );
}

export default Header;