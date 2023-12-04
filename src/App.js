import React from 'react';
import './App.css';
import InstructionSteps from './InstructionSteps';
import Difficulties from './Difficulties';
import Building from './Building';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my Lab 10c REACT site!</h1>
        <p>By: Yusuf Hamed</p>
      </header>
      <body>
         <InstructionSteps />
         <Building />
         <Difficulties />
         <br></br>
      </body>
    </div>
  );
}

export default App;