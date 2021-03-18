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
  const [purchased, setPurchased] = useState([])

  console.log(purchased)

  useEffect(() => {
    fetch("http://localhost:3000/items")
    .then(response => response.json())
    .then(setItems)
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
        <Inventory items={items} purchased={purchased} setPurchased={setPurchased} />
      </Route>
      <Route path="/checkout">
        <Checkout purchased={purchased} />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
