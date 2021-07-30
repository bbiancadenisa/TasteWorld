import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  root: {
    display: "flex",
    flexDirection: "column",
    alignContent: 'center',
    alignItems: 'center',
    paddingTop:"100px",
  },

  paper: {
    margin:"10px",
  },

  submit: {
    backgroundColor:"rgb(2, 104, 78)",
    margin:"20px 0 40px 0",
    width: 250,   
  },

  login:{
    color: "rgb(2, 104, 78)",
    fontWeight:"bold",
    fontFamily: "Dancing Script",
    fontSize:"35px",
  },

  text:{
    width:"350px",
    margin:"15px"
  },  
  
}));



export default function LoginPage() {

  const classes = useStyles();

  const onFormSubmit = () => {
  }

  return (
    <div className={classes.logInPage}>
    <Grid  container className={classes.root}>
      <Grid item sm={8}md={5} component={Paper}elevation={6} >

        <div className={classes.paper}>
          
          <Typography component="h1" variant="h5" className={classes.login}>
            Log in
          </Typography>

          <form className={classes.form}>

            <TextField required id="email" label="email" name="email" className={classes.text}/>

            <TextField required name="password" label="password" type="password" id="password" className={classes.text}/>

            <Button type="submit" variant="contained" onClick={() => onFormSubmit()} className={classes.submit}>
              Log In
            </Button>

          </form>
        </div>
        
      </Grid>
    </Grid>
    </div>
  );
}
