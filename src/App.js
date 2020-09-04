import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import NoMatch from './Components/NoMatch/NoMatch';
import Home from './Components/Home/Home';
import PostInfo from './Components/PostInfo/PostInfo';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
        <Home/>
        </Route>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/post/:id">
               <PostInfo/>   
          </Route>
        <Route path="*">
        <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
