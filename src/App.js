import React, { Component } from "react";

import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((res) => res.json())
      .then((users) =>
        this.setState({
          monsters: users,
        })
      );
  }

  render() {
    return (
      <div className="App">
        <input
          onChange={(e) =>
            this.setState({
              searchField: e.target.value,
            })
          }
          type="search"
          placeholder="search monsters"
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
