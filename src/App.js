import './App.css';
import './index.css';
import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from './NavBar';
import Inventory from './Inventory';
import Checkout from './Checkout';
import Home from './Home';

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])

  console.log(cartItems)

  const user = 1

  useEffect(() => {
    fetch("http://localhost:3000/items")
    .then(response => response.json())
    .then(setItems)
    }, [])

  useEffect(() => {
    fetch("http://localhost:3000/carts")
    .then(response => response.json())
    .then(setCartItems)
  }, [])

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
        <Inventory 
          items={items} 
          user={user} 
          cartItems={cartItems}
          setCartItems={setCartItems} />
      </Route>
      <Route path="/checkout">
        <Checkout cartItems={cartItems} />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
