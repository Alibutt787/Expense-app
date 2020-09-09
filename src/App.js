import React from 'react';
import './App.css';
import Tracker from './Tracker';
import {Li} from './Li'
import {Total} from './Total'
import {Global} from './Global'


function App() {
  return (
    <Global>
    <div className="App">
     <Tracker />
     <Total />
     <Li/>
    </div>
    </Global>
  );
}

export default App;
