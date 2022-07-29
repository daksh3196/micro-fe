import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginForm from './Components/LoginForm';
import App from './App';


const Routes = () => {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component = {App} />
            <Route exact path="/login" component={LoginForm} />
        </Switch>
    </Router>
  );
}

export default Routes;