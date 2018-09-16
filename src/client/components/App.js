import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import OrderContainer from './OrderContainer';
import Selection from './Selection';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/cart/:cartId" component={OrderContainer} />
      <Route exact path='/selection/test' component={Selection} />
    </Switch>
  </Router>
)

export default App;
