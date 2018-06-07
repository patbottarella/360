import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactCursorPosition from 'react-cursor-position';
import Image from './components/Image';
import Entity from './components/360_entity';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Entity />
      </div>
    );
  }
}

export default App;
