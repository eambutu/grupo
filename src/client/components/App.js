import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import Cart from './Cart';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/cart/:cartId" component={Cart} />
      <Route path="/selection/:selectionId" component={Selection} />
    </Switch>
  </Router>
)

export default App;
