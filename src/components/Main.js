require('normalize.css');
require('styles/App.css');

import React from 'react';
import UserInfoComponent from './sessionScreen/UserInfoComponent';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <h1>Monitoring App</h1>
        <UserInfoComponent />
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
