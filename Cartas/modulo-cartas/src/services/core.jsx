import React, { Component } from "react";

class Core extends Component {
  constructor() {
    super();
    this.state = {
      counters: [
        { id: 1, value: 4 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
      ],
      tasks: []
    };
  }

  componentDidMount() {
    fetch("/api/tasks")
      .then(res => res.json())
      .then(tasks => this.setState({ tasks }));
  }
}

export default Core;
