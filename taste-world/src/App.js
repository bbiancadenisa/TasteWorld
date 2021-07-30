import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from './login-page';
import RecipeList from './recipe-list';
import AddRecipe from './add-recipe';
import Menu from './menu';
import Header from './header';
import background from './images/headerimage.jpg';

function App() {
  return (
    <Router>
      <div className="App" style={{backgroundImage: {background}, backgroundSize: "cover", minHeight: "100%", minWidth: "1024px", height:"100%", top:0, left :0, width: "100%"}}>
        
        <Header/>
      <Switch>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/recipe-list" component={RecipeList}/> 
        <Route exact path="/add-recipe" component={AddRecipe}/> 
        <Route exact path="/menu" component={Menu}/> 
      </Switch>
      </div>
    </Router>
     );
}

export default App;
