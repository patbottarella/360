import React from 'react';
import './styles.css';
import ReactCursorPosition from 'react-cursor-position';
import CursorViewImage from '../CursorViewImage';

import { EMPLOYEELIST } from '../../employee.js';
console.log('EMPLOYEELIST', EMPLOYEELIST);

const Entity = () => {
  return (
    <div>
      <ReactCursorPosition className="Wrapper">
        <div className="Header">DUMMY HEADER</div>
          {
            EMPLOYEELIST.map(employee =>
              <CursorViewImage key={employee.id}
                name={employee.name}
                description={employee.position}
                images={employee.spriteImage}
              />
            )
          }
      </ReactCursorPosition>
    </div>
  );
}

export default Entity;
