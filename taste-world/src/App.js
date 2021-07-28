import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from './login-page';
import RecipeList from './recipe-list';
import AddRecipe from './add-recipe';
import Menu from './menu';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/" component={LoginPage}/>
        <Route path="/recipe-list" component={RecipeList}/> 
        <Route path="/add-recipe" component={AddRecipe}/> 
        <Route path="/menu" component={Menu}/> 
      </Switch>
      </div>
    </Router>
     );
}

export default App;
