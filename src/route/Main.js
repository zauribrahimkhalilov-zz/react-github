import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Search from '../pages/Search';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search' component={Search} />
        </Switch>
      </main>
    );
  }
}

export default Main;