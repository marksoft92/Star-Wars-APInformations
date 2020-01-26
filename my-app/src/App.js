import React from 'react';

import './App.css';

class App extends React.Component {

  render() {
    fetch('https://swapi.co/api/')
      .then(response => response.json())
      .then(data => console.log(data));
    return (
      <div>x</div>
    )
  }
}

export default App;
