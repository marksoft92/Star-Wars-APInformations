import React from 'react';

import HomeApp from './HomeApp/HomeApp.js';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
class App extends React.Component {

  render() {
    fetch('https://swapi.co/api/')
      .then(response => response.json())
      .then(data => console.log(data));
    return (
      <BrowserRouter>
        <Route exact path='/' component={HomeApp} />
      </BrowserRouter>
    )
  }
}

export default App;
