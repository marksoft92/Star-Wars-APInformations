import React from 'react';


import Routes from './Routes/Routes.js';
import './App.css';

class App extends React.Component {

  render() {
    fetch('https://swapi.co/api/')
      .then(response => response.json())
      .then(data => console.log(data));
    return (

      <Routes />

    )
  }
}

export default App;
