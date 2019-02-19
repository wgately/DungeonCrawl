import React, { Component } from 'react';
import Start from './Start';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App landing-background">
        <h1 className="App-title">Dungeon Crawl</h1>
        <h3>This is a fun game of strategy and chance</h3>
        <div className="startButton"><Start /></div>
      </div>
    );
  }
}

export default App;
