import React from 'react';

//Components
import Navigation from './components/navigaton'

//MISC
import {
  BrowserRouter as Router,Switch} from "react-router-dom";

  
import Routes from './routes'

function App() {
  return (
    <React.Fragment>
    <Router>
    <Navigation></Navigation>
    <Switch>
          {Routes}
        </Switch>
    </Router>
    </React.Fragment>
  );
}

export default App;
