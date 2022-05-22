import React, { Component } from "react";

class Clock extends Component {
  state = {
    time: {
      day: new Date().getDay(),
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
    },
  };

  render() {
    return (
      <React.Fragment>
        <p>{this.handleDay(this.state.time.day)}</p>
        <span className="m-2">{this.handleHours(this.state.time.hours)}</span>:
        <span className="m-2">{this.handleMinutes(this.state.time.minutes)}</span>
        <span>{this.state.time.hours < 12 ? "AM" : "PM"}</span>
      </React.Fragment>
    );
  }

  componentDidMount() {
    setInterval(
      () => this.updateClock(), 1000
    );
  }

  updateClock() {
    this.setState({time: {
      day: new Date().getDay(),
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
    }});

  }

  handleHours(hours) {
    return hours > 12 ? (hours -= 12) : hours;
  }

  handleMinutes(minutes) {
    return minutes;
  }

  handleDay(day) {
    switch (day) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        return "Invalid day";
    }
  }
}

export default Clock;
