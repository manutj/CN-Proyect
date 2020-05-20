import React from 'react';

//Views
import Login from './views/login';
import Home from './views/home';

//Components
import Navigation from './components/navigaton'

//MISC
import {
  BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
    <Router>
    <Navigation></Navigation>
    <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
          <Home />
          </Route>
        </Switch>
    </Router>
    </React.Fragment>
  );
}

export default App;
