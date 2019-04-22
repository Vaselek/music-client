import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';
import {Route, Switch, withRouter} from 'react-router-dom';

import Toolbar from './components/UI/Toolbar/Toolbar';
import Artists from "./containers/Artists/Artists";
import Albums from "./containers/Albums/Albums";
import Tracks from "./containers/Tracks/Tracks";
import Register from "./containers/Register/Register";
import {connect} from "react-redux";
import Login from "./containers/Login/Login";
import TrackHistories from "./containers/TrackHistories/TrackHistories";
import {getUser} from "./store/actions/usersActions";

class App extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <Toolbar user={this.props.user}/>
        </header>
        <Container>
          <Switch>
            <Route path='/' exact component={Artists}/>
            <Route path='/artists/:id' exact component={Albums}/>
            <Route path='/albums/:id' exact component={Tracks}/>
              <Route path="/register" exact component={Register} />
              <Route path="/login" exact component={Login} />
              <Route path="/track-histories" exact component={TrackHistories} />
          </Switch>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
    user: state.users.user ? state.users.user : getUser()
})

export default withRouter(connect(mapStateToProps)(App));
