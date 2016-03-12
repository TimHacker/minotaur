require('normalize.css');
require('styles/App.css');

let DatePicker = require('react-datepicker');
let moment = require('moment');

require('react-datepicker/dist/react-datepicker.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <h1>Monitoring App</h1>
        <h2>Key Information</h2>
        <input type="text" placeholder="Name" />
        <label for="sessionType">Session Type:</label>
        <select id="sessionType">
          <option></option>
          <option value="prison">Prison</option>
          <option value="postRelease">Post Release</option>
          <option value="visit">Visit</option>
        </select>
        <br />
        <label>From:</label>
        <DatePicker

           />
        <label>To:</label>
        <DatePicker

              />
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
