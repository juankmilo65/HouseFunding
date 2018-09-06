import React, { Component } from "react";
import Counter from "./counter";
import Task from "./task";
import AddTask from "./addTask";
import AddFile from "./addFile";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      tasks,
      onDeleteTask,
      onAddTask,
      onEditTask,
      onSendFile
    } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counter}
          />
        ))}
        <hr />
        <h3>CRUD MongoDB</h3>
        <AddTask onAddTask={onAddTask} />
        {tasks.map(task => (
          <Task
            key={task._id}
            {...task}
            onDeleteTask={onDeleteTask}
            onEditTask={onEditTask}
          />
        ))}
        <hr />
        <h3>Leer y cargar archivos</h3>
        <AddFile onSendFile={onSendFile} />
      </div>
    );
  }
}

export default Counters;
