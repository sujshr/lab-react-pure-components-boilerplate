import React, { PureComponent } from "react";
import withCounter from "./WithCounter";

class PureCounter extends PureComponent {
  render() {
    const { toggle, count, toggleCount, incrementCount } = this.props;
    console.log("This is Pure Component");

    return (
      <div>
        <h2>Pure Counter</h2>
        <p>{count}</p>
        <button onClick={toggleCount}>Toggle {toggle ? "On" : "Off"}</button>
        <button onClick={incrementCount}>Increase Count</button>
      </div>
    );
  }
}

export default withCounter(PureCounter);
