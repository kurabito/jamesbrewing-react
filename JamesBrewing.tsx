import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FeatureList from './FeatureList';
import ABVfromOGandFG from './ABVfromOGandFG';
import ABVfromSGandBrix from './ABVfromSGandBrix';

export default function JamesBrewing() {
  return (
    <div>
      <Router>
      <h1><Link to="/">James Brewing</Link></h1>
        <Switch>
          <Route exact path="/">
            <FeatureList />
          </Route>
          <Route exact path="/abvogfg">
            <ABVfromOGandFG />
          </Route>
          <Route exact path="/abvsgbrix">
            <ABVfromSGandBrix />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}
