import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Programs from './components/Programs';
import Start from './components/Start';
import Player from './components/Player'
import Letters from './components/Letters'
import LetterView from './components/LetterView'


class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>An amazing react page</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Start </Link></li>
            <li><Link to={'/programs/populart'} className="nav-link">Populart</Link></li>
            <li><Link to={'/programs/letters'} className="nav-link">A-Ö</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Start} />
              <Route path='/programs/populart' component={Programs} />
              <Route path='/programs/letters' component={Letters} />
              <Route path='/player' component={Player} />
              <Route path='/programs' component={LetterView} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;