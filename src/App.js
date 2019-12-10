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