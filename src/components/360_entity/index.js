import React from 'react';
import './styles.css';
import ReactCursorPosition from 'react-cursor-position';
import Image from '../Image';

const Entity = () => {
  return (
    <div>
      <ReactCursorPosition className="Wrapper">
        <div className="Header">DUMMY HEADER</div>
          <Image name="Patrick Bottarella" />
          <Image name="Hans Jackob" />
          <Image name="Max Muster" />
          <Image name="Peter Retep" />
          <Image name="Lukas Sakul" />
          <Image name="Herbert Kuenz"/>
          <Image name="Hannes Sennah"/>
          <Image name="Pascal Schneider"/>
          <Image name="Georg Dügg"/>
          <Image name="Sepp Pepp"/>
          <Image name="Ruedi Füsel"/>
          <Image name="Timo Omit"/>
          <Image name="Samuel Hirzel"/>
          <Image name="Nils Slin"/>
          <Image name="Oliver Revilo"/>
          <Image name="Karl Lark"/>
          <Image name="Freddy Taub"/>
      </ReactCursorPosition>
    </div>
  );
}

export default Entity;
