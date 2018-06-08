import React from 'react';
import './styles.css';
import ReactCursorPosition from 'react-cursor-position';
import Image from '../TestImage';
//import Image from '../Image';

const Entity = () => {
  return (
    <div>
      <ReactCursorPosition className="Wrapper">
        <div className="Header">HEADER</div>
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
      </ReactCursorPosition>
    </div>
  );
}

export default Entity;
