import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import OrderContainer from './OrderContainer';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/cart/:cartId" component={OrderContainer} />
    </Switch>
  </Router>
)

export default App;
