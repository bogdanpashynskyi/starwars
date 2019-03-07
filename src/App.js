import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import Starships from './components/Starships'
import Movies from './components/Movies'
import People from './components/People'


class App extends Component {
  render() {
    return ( 
        <Router>
          <div className="App">
            <h2>Star Wars</h2>
            
            <div className="App__nav-links">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/starships">Starships</NavLink>
              <NavLink to="/movies">Movies</NavLink>
              <NavLink to="/People">People</NavLink>
            </div>

            <Switch>
              <Route path="/home" component={Home}/> 
              <Route path="/starships" component={Starships} /> 
              <Route path="/movies" component={Movies} /> 
              <Route path="/people" component={People}/> 
            </Switch>
            
          </div>
        </Router>
    );
  }
}

export default App;
