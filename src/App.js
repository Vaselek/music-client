import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';

import Toolbar from './components/UI/Toolbar/Toolbar';
import Artists from "./containers/Artists/Artists";
import Albums from "./containers/Albums/Albums";
import Tracks from "./containers/Tracks/Tracks";

class App extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <Toolbar/>
        </header>
        <Container>
          <Switch>
            <Route path='/' exact component={Artists}/>
            <Route path='/artists/:id' exact component={Albums}/>
            <Route path='/albums/:id' exact component={Tracks}/>
          </Switch>
        </Container>
      </Fragment>
    );
  }
}

export default App;
