import React, { Component } from "react";

class Clock extends Component {
  state = {
  };

  render() {
    const {day, hours, minutes} = this.state;
    return (
      <React.Fragment>
        <p>{this.handleDay(day)}</p>
        <span className="m-2">{this.handleHours(hours)}</span>:
        <span className="m-2">{this.handleMinutes(minutes)}</span>
        <span>{hours < 12 ? "AM" : "PM"}</span>
      </React.Fragment>
    );
  }

  componentDidMount() {
    setInterval(
      () => this.updateClock(), 1000
    );
  }

  updateClock() {
    this.setState({
      day: new Date().getDay(),
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
    });

  }

  handleHours(hours) {
    return hours < 10 ? ("0" + hours) : hours > 12 ? (hours -= 12) : hours;
  }

  handleMinutes(minutes) {
    return minutes < 10 ? ("0" + minutes) : minutes;
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
