import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewBeer from "./components/NewBeer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NewBeer />
      </header>
    </div>
  );
}

export default App;
