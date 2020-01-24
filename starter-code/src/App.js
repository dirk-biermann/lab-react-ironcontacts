import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ContactView from './components/ContactView.js';
import contacts from './contacts.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome Iron Contact</h1>
        </header>
        <ContactView contacts={contacts}/>
      </div>
    );
  }
}

export default App;
