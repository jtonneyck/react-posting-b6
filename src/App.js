import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewBeer from "./components/NewBeer";
import "./base.scss";
import {Route} from 'react-router-dom';
import Nav from "./components/Nav";
import Home from "./components/Home";
import BeerDetail from "./components/BeerDetail";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />

        <Route exact path="/" component={Home} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route exact path="/beer-detail/:beerId" component={BeerDetail} />

      </header>
    </div>
  );
}

export default App;
