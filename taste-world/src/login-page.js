import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

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
    color: "white"
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
  logInPage:{
    height: "90vh"
  }
  
}));

export default function LoginPage() {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [error,setError] = useState();

  const onSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      username: username,
      password: password
    }
    try {
        let res = await axios.post('http://localhost:3001/login', payload)
        console.log(res);
        history.push("/menu"); 
    } catch (e) {
        console.log(e);
        setError(e);
    } 
  }

  const classes = useStyles();

  return (
    <div className={classes.logInPage}>
    <Grid  container className={classes.root}>
      <Grid item sm={8}md={5} component={Paper}elevation={6} >

        <div className={classes.paper}>
          
          <Typography component="h1" variant="h5" className={classes.login}>
            Log in
          </Typography>

          <form onSubmit={onSubmit} className={classes.form}>

            <TextField value={username} onChange={(e) => setUserName(e.target.value)} required id="username" label="username" name="username" className={classes.text}/>

            <TextField value={password} onChange={(e) => setPassword(e.target.value)} required name="password" label="password" type="password" id="password" className={classes.text}/>

            {error && <Typography style={{color: "red"}} >Eroare la intoducerea datelor!</Typography>}

            <Button type="submit" variant="contained" className={classes.submit}>
              Log In
            </Button>

          </form>
        </div>
        
      </Grid>
    </Grid>
    </div>
  );
}
