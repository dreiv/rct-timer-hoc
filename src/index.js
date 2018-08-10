import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// HoC to allow us to refresh a component on a ms interval
const onInterval = refresh => WrappedComponent => {
  return class WithInterval extends Component {
    constructor(props) {
      super(props);

      this.state = { ticks: 0 };
      this.interval = setInterval(this.tick.bind(this), refresh);
    }

    tick() {
      this.setState(prevState => ({
        ticks: ++prevState.ticks
      }));
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      return <WrappedComponent date={new Date()} />;
    }
  };
};

// Component to display current time
const Time = ({ date }) => <h1>Current time: {date.toLocaleTimeString()}</h1>;

// A timer by composing our <Time/> with HoC
const Timer = onInterval(1000)(Time);

function App() {
  return (
    <div className="App">
      <Timer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
