import React from "react";

function withCounter(WrappedComponent) {
  class WithCounter extends React.Component {
    constructor() {
      super();
      this.state = {
        toggle: false,
        count: 0,
      };
      this.toggleCount = this.toggleCount.bind(this);
      this.incrementCount = this.incrementCount.bind(this);
    }

    toggleCount() {
      this.setState((previousState) => {
        return {
          toggle: !previousState.toggle,
        };
      });
    }

    incrementCount() {
      if (this.state.toggle) {
        this.setState((previousState) => {
          return {
            count: previousState.count + 1,
          };
        });
      } else {
        this.setState((previousState) => {
          return {
            count: previousState.count,
          };
        });
      }
    }
    render() {
      return (
        <WrappedComponent
          toggle={this.state.toggle}
          count={this.state.count}
          incrementCount={this.incrementCount}
          toggleCount={this.toggleCount}
        ></WrappedComponent>
      );
    }
  }
  return WithCounter;
}

export default withCounter;
