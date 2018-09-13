import React, { Component } from 'react';
import './App.css';
import "./assets/css/style.css";
import "./assets/css/bootstrap.css";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Routes />
      </div>
    );
  }
}

export default App;
