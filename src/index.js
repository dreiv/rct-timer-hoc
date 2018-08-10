import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// Component to display current time
const Time = ({ time }) => <h1>{time.toLocaleTimeString()}</h1>;

function App() {
  return (
    <div className="App">
      <Time time={new Date()} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
