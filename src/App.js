import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Programs from './components/Programs';
import Start from './components/Start';
import Program from './components/Program'
import Player from './components/Player'


class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>An amazing react page</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Start </Link></li>
            <li><Link to={'/programs'} className="nav-link">Programs</Link></li>
            <li><Link to={'/player'} className="nav-link">Player</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Start} />
              <Route path='/programs' component={Programs} />
              <Route path='/player' component={Player} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;