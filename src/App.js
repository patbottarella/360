import React from 'react';
import './App.css';
import Entity from './components/360_entity';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Entity />
      </div>
    </BrowserRouter>
  );
}

export default App;
