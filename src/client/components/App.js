import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import Cart from './Cart';
import Selection from './Selection';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/cart/:cartId" component={Cart} />
      <Route exact path="/selection/:selectionId" component={Selection} />
    </Switch>
  </Router>
)

export default App;
