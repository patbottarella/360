import React from 'react';
import './styles.css';
import ReactCursorPosition from 'react-cursor-position';
import CursorViewImage from '../CursorViewImage';

const Entity = () => {
  return (
    <div>
      <ReactCursorPosition className="Wrapper">
        <div className="Header">DUMMY HEADER</div>
          <CursorViewImage name="Patrick Bottarella" />
          <CursorViewImage name="Hans Jackob" />
          <CursorViewImage name="Max Muster" />
          <CursorViewImage name="Peter Retep" />
          <CursorViewImage name="Lukas Sakul" />
          <CursorViewImage name="Herbert Kuenz"/>
          <CursorViewImage name="Hannes Sennah"/>
          <CursorViewImage name="Pascal Schneider"/>
          <CursorViewImage name="Georg Dügg"/>
          <CursorViewImage name="Sepp Pepp"/>
          <CursorViewImage name="Ruedi Füsel"/>
          <CursorViewImage name="Timo Omit"/>
          <CursorViewImage name="Samuel Hirzel"/>
          <CursorViewImage name="Nils Slin"/>
          <CursorViewImage name="Oliver Revilo"/>
          <CursorViewImage name="Karl Lark"/>
          <CursorViewImage name="Freddy Taub"/>
      </ReactCursorPosition>
    </div>
  );
}

export default Entity;
