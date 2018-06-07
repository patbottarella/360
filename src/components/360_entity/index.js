import React, { Component } from 'react';
import './styles.css';
import ReactCursorPosition from 'react-cursor-position';
import Image from '../Image';

class Entity extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ReactCursorPosition className="Wrapper">
        <Image />
      </ReactCursorPosition>
    );
  }
}

export default Entity;
