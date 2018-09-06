import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
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
    this.getTasks();
  }

  getTasks() {
    fetch("/api/tasks")
      .then(res => res.json())
      .then(tasks => this.setState({ tasks }));
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDeleteTask = taskId => {
    fetch("/api/tasks/" + taskId, {
      method: "delete"
    }).then(this.getTasks());
  };

  handleEditTask = (idTask, title, description) => {
    const task = {
      title: title,
      description: description
    };

    fetch("/api/tasks/" + idTask, {
      method: "put",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(this.getTasks());
  };

  handleAddTask = (title, description) => {
    const task = {
      title: title,
      description: description
    };

    fetch("/api/tasks/", {
      method: "post",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        this.getTasks();
      })
      .catch(err => console.error(err));
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleSendFile = file => {
    const objectBase64 = { object64: file };
    fetch("api/files", {
      method: "post",
      body: JSON.stringify(objectBase64),
      headers: {
        "Content-Type": "application/json"
      }
    }).catch(err => console.error(err));
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            tasks={this.state.tasks}
            onDeleteTask={this.handleDeleteTask}
            onAddTask={this.handleAddTask}
            onEditTask={this.handleEditTask}
            onSendFile={this.handleSendFile}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
