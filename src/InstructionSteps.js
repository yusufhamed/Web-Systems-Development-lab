// src/InstructionSteps.js
import React from 'react';
import './InstructionSteps.css';

function InstructionSteps() {
  return (
    <div className="Instruction-Steps">
      <p>
        This website was created using React. Below are the steps on how
        this lab was set up:
      </p>
      <p>Make sure to install Node.js before starting!</p>
      <ol>
        <li>Open your terminal</li>
        <li>Install React.js: <code>npm install -g create-react-app</code></li>
        <li>Run the command: <code>npx create-react-app lab10c</code></li>
        <li>Navigate into the project: <code>cd lab10c</code></li>
        <li>Start the development server: <code>npm start</code></li>
      </ol>
      <p>
        Feel free to explore the React app and make any changes or
        enhancements as needed.
      </p>
    </div>
  );
}

export default InstructionSteps;