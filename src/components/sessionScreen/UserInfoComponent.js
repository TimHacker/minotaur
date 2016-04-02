'use strict';

import React from 'react';

let DatePicker = require('react-datepicker');
let moment = require('moment');

require('react-datepicker/dist/react-datepicker.css');

require('styles/sessionScreen/UserInfo.css');

class UserInfoComponent extends React.Component {
//Next step is to get the date pickers working!
//https://github.com/Hacker0x01/react-datepicker
  constructor() {
    super();
    this.state = {
      startDate: moment(),
      endDate: moment(),
      dateFormat: 'DD/MM/YYYY'
    }

    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
  }

  handleStartDateChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleEndDateChange(date) {
    this.setState({
      endDate: date
    });
  }

  render() {
    return (
      <div className="userinfo-component">
        <h2>Key Information</h2>
        <input type="text" placeholder="Name" />
        <label htmlFor="sessionType">Prison name:</label>
        <select id="sessionType">
          <option></option>
          <option>Eastwood Park</option>
          <option>Bristol</option>
          <option>Guys Marsh</option>
        </select>
        <br />
        <label>From:</label>
        <DatePicker
             selected={this.state.startDate}
             onChange={this.handleStartDateChange}
             dateFormat={this.state.dateFormat}
            />
        <label>To:</label>
        <DatePicker
             selected={this.state.endDate}
             onChange={this.handleEndDateChange}
             dateFormat={this.state.dateFormat}
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
