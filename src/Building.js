// src/Building.js
import React from 'react';
import './Building.css';

function Building() {
  return (
    <div className="box">
      <h2>How I built the page!</h2>
      <p>Three Main Components were used to build this website: Instruction-Steps, Building and Difficulties</p>
      <p>Each of these components consists of a .js and a .css version for styling and for HTML purposes. After each component was built and styled, I exported each one and then in the App.js I imported them to be able to use inside of my webpage </p>
    </div>
  );
}

export default Building;