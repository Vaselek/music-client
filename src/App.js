import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';
import {withRouter} from 'react-router-dom';

import Toolbar from './components/UI/Toolbar/Toolbar';
import {connect} from "react-redux";
import {getUser} from "./store/actions/usersActions";
import Routes from "./Routes";

import './App';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <Toolbar user={this.props.user}/>
        </header>
        <Container>
            <Routes user={this.props.user}/>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
    user: state.users.user ? state.users.user : getUser()
})

export default withRouter(connect(mapStateToProps)(App));
