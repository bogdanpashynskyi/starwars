import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import Starships from './components/Starships'
import { MoviesPage } from './components/Movies'

class App extends Component {
  render() {
    return ( 
        <Router>
          <div className="App">
            <h2>Star Wars</h2>
            
            <div className="App__nav-links">
              <NavLink className="App__navlink" to="/home">Home</NavLink>
              <NavLink className="App__navlink" to="/starships">Starships</NavLink>
              <NavLink className="App__navlink" to="/movies">Movies</NavLink>
              <NavLink className="App__navlink" to="/people">People</NavLink>
            </div>

            <Switch>
              <Route exact path="/" component={Home}/> 
              <Route path="/home" component={Home}/> 
              <Route path="/starships" component={Starships} /> 
              <Route path="/movies" component={MoviesPage} /> 
              {/* <Route path="/people" component={PeoplePage}/>  */}
              <Route render={() => {return 'Page Not Found'}}/>
            </Switch>
            
          </div>
        </Router>
    );
  }
}

export default App;
