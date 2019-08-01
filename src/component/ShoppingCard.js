import React from 'react';
import Navbar from './navbar';
import Main from './Main';
import Shop from './shop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default function MovieApp () {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/shop" component={Shop} />
        </Switch>

      </div>
    </Router>
  );
}
