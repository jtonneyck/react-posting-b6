import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./base.scss";
import {Route} from 'react-router-dom';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import BeerDetail from "./pages/BeerDetail";
import NewBeer from "./pages/NewBeer";
import NewBeerWithFile from "./pages/NewBeerWithFile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Route exact path={"/(|home)/"} component={Home} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route exact path="/new-beer-with-file" component={NewBeerWithFile} />
        <Route exact path="/beer-detail/:beerId" component={BeerDetail} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />

      </header>
    </div>
  );
}

export default App;
