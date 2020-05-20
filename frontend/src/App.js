import React from 'react';

//Views
import Login from './views/login';
import Home from './views/home';

//Components
import Navigation from './components/navigaton/navigation'

//MISC
import {
  BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Navigation from './components/navigaton';

function App() {
  return (
    <React.Fragment>
    <Navigation></Navigation>
    <Router>
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
