import './App.css';
import './index.css';
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from './NavBar';
import Inventory from './Inventory';
import Checkout from './Checkout';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <h1 className="title">vinTage</h1>
      <Route path="/">
        <NavBar />
        <Redirect to="/home" />
      </Route>
      <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/inventory">
        <Inventory />
      </Route>
      <Route path="/checkout">
        <Checkout />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
