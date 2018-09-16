import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import Cart from './Cart';
import NestedGrid from './Selection';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/cart/:cartId" component={Cart} />
      <Route exact path="/selection/:selectionId" component={NestedGrid} />
    </Switch>
  </Router>
)

export default App;
