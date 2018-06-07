import React from 'react';
import './styles.css';
import ReactCursorPosition from 'react-cursor-position';
import Image from '../Image';

const Entity = () => {
  return (
    <ReactCursorPosition className="Wrapper">
      <Image />
    </ReactCursorPosition>
  );
}

export default Entity;
