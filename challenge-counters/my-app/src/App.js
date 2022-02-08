import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vegetarian: 0,
      vegan: 0,
      halal: 0,
      "gluten-free": 0,
      anything: 0,
      meat: 0,
    };
  }

  makeButton(lunchType) {
    //   const obj = {
    //     name: "Chris"
    //   }
    //  obj["name"] = "Mariam"
    //   obj.name = "Mariam"

    return (
      <div>
        <button
          onClick={() => {
            const newState = {};
            newState[lunchType] = this.state[lunchType] + 1;
            this.setState(newState);
          }}
        >
          {lunchType}
        </button>
        <p>{this.state[lunchType]}</p>
      </div>
    );
  }

  makeButtons() {
    // const array = ["vegetarian", "vegan", "halal", "gluten-free", "anything"];
    const array = Object.keys(this.state);
    const allButtons = array.map((lunchType) => {
      return this.makeButton(lunchType);
    });
    return allButtons;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Lunch Counters</p>
          {this.makeButtons()}
        </header>
      </div>
    );
  }
}

export default App;
