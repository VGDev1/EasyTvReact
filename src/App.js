import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Populart from './views/Populart/Populart';
import Start from './views/Start/Start';
import Player from './views/Player/Player'
import Letters from './views/AO/Sections/Letters'
import LetterView from './views/AO/LetterView'
import Episodes from './views/Episodes/Episodes'


class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <Switch>
              <Route exact path='/' component={Start} />
              <Route path='/programs/populart' component={Populart} />
              <Route path='/programs/letters' component={Letters} />
              <Route path='/player' component={Player} />
              <Route path='/programs' component={LetterView} />
              <Route path='/episodes' component={Episodes} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
