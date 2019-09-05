import React, { Component } from 'react';
import './App.css';
import Questions from './components/Questions';

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome to the Hogwarts Sorting Hat!</h1>
        <Questions
        />
      </div>
    );
  }
}

export default App;
