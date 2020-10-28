import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Course from './componant/course/Course';
import Details from './componant/detail/Details';
import Menu from './componant/menu/Menu';
// const { default: Course } = require("./componant/course/Course");


function App() {
  return (
    <div>
   
      <Router>
      
        <Switch>
        
            <Route exact path="/">
              <Menu></Menu>
              <Course></Course>
            </Route>
            <Route path="/home">
              <Course></Course>
            </Route>
            <Route path="/details/:id">
                <Details></Details>
            </Route>


        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
