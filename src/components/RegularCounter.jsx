import React, { Component } from "react";
import withCounter from "./WithCounter";
class RegularCounter extends Component {
  render() {
    console.log("This is Simple Component");

    const { toggle, count, toggleCount, incrementCount } = this.props;
    return (
      <div>
        <h2>Regular Counter</h2>
        <p>{count}</p>
        <button onClick={toggleCount}>Toggle {toggle ? "On" : "Off"}</button>
        <button onClick={incrementCount}>Increase Count</button>
      </div>
    );
  }
}

export default withCounter(RegularCounter);
