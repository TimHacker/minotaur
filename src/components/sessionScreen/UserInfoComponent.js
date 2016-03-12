'use strict';

import React from 'react';

let DatePicker = require('react-datepicker');
let moment = require('moment');

require('react-datepicker/dist/react-datepicker.css');

require('styles/sessionScreen/UserInfo.css');

class UserInfoComponent extends React.Component {
//Next step is to get the date pickers working!
//https://github.com/Hacker0x01/react-datepicker
  // getInitialState() {
  //   return {
  //     startDate: moment(),
  //     endDate: moment()
  //   };
  // }
  //
  // handleChange(date) {
  //   this.setState({
  //     startDate: date
  //   });
  // }

  render() {
    return (
      <div className="userinfo-component">
        <h2>Key Information</h2>
        <input type="text" placeholder="Name" />
        <label htmlFor="sessionType">Session Type:</label>
        <select id="sessionType">
          <option></option>
          <option value="prison">Prison</option>
          <option value="postRelease">Post Release</option>
          <option value="visit">Visit</option>
        </select>
        <br />
        <label>From:</label>
        <DatePicker
            // selected={this.state.startDate}
            // onChange={this.handleChange}
            />
        <label>To:</label>
        <DatePicker
            // selected={this.state.endDate}
            // onChange={this.handleChange}
            />
      </div>
    );
  }
}

UserInfoComponent.displayName = 'SessionScreenUserInfoComponent';

// Uncomment properties you need
// UserInfoComponent.propTypes = {};
// UserInfoComponent.defaultProps = {};

export default UserInfoComponent;
